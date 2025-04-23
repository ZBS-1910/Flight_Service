const CrudRepository = require('./crud-repository');
const { Flight, Airport, Airplane,City  } = require('../models');
const { Sequelize } = require('../models/index');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        try {
            const response = await Flight.findAll({
                where: filter,  // General filter
                order: sort,
                include: [
                    {
                        model: Airplane,
                        required: true,
                        as: 'airplaneDetail',
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'departureAirport',
                        on: {
                            col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                        },
                        include:{
                            model:City,
                            required:true
                        }
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'arrivalAirport',
                        on: {
                            col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                        },include:{
                            model:City,
                            required:true
                        }
                    }
                ]
            });
            return response;
        } catch (error) {
            console.error('Error fetching flights:', error);
            throw error;
        }
    }
    
}

module.exports = FlightRepository;
