const CrudRepository = require("./crud-repository");
const { Flight, Airport, Airplane, City } = require("../models");
const { Sequelize } = require("../models/index");
const db = require("../models");
const { addRowLockOnFlights } = require("./queries");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    try {
      const response = await Flight.findAll({
        where: filter, // General filter
        order: sort,
        include: [
          {
            model: Airplane,
            required: true,
            as: "airplaneDetail",
          },
          {
            model: Airport,
            required: true,
            as: "departureAirport",
            on: {
              col1: Sequelize.where(
                Sequelize.col("Flight.departureAirportId"),
                "=",
                Sequelize.col("departureAirport.code")
              ),
            },
            include: {
              model: City,
              required: true,
            },
          },
          {
            model: Airport,
            required: true,
            as: "arrivalAirport",
            on: {
              col1: Sequelize.where(
                Sequelize.col("Flight.arrivalAirportId"),
                "=",
                Sequelize.col("arrivalAirport.code")
              ),
            },
            include: {
              model: City,
              required: true,
            },
          },
        ],
      });
      return response;
    } catch (error) {
      console.error("Error fetching flights:", error);
      throw error;
    }
  }

  async updateRemaingSeats(flightId, seats, dec = true) {
    const transaction = await db.sequelize.transaction();
    try {
      // Lock row within the transaction
      await db.sequelize.query(
        `SELECT * FROM Flights WHERE id = ${flightId} FOR UPDATE`,
        { transaction }
      );
  
      const flight = await Flight.findByPk(flightId, { transaction });
  
      // Corrected decrement/increment with proper transaction scope
      if (dec) {
        await flight.decrement("totalSeats", { by: seats, transaction });
      } else {
        await flight.increment("totalSeats", { by: seats, transaction });
      }
  
      await transaction.commit(); // ✅ Don't forget to commit
      return flight;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
  
}

module.exports = FlightRepository;
