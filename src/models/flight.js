'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Flight extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Airplane, {
                foreignKey: 'airplaneId',
                as: 'airplaneDetail'
              });
              this.belongsTo(models.Airport, {
                foreignKey: 'departureAirportId',
                as: 'departureAirport',
              });
              this.belongsTo(models.Airport, {
                foreignKey: 'arrivalAirportId',
                as: 'arrivalAirport',
              });
        }
    }
    Flight.init({
        flightNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        airplaneId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        departureAirportId: {
            type: DataTypes.INTEGER, // Changed to INTEGER
            allowNull: false
        },
        arrivalAirportId: {
            type: DataTypes.INTEGER, // Changed to INTEGER
            allowNull: false
        },
        arrivalTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        departureTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        boardingGate: {
            type: DataTypes.STRING
        },
        totalSeats: { // Consider renaming if this means remaining seats
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Flight',
    });
    return Flight;
};