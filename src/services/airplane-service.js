const { AirplaneRepository } = require('../repositories');
const { StatusCodes } = require("http-status-codes");

const AppError = require('../utils/errors/app_error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
      //  console.log("got error", error);

        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
           // console.log("got explanation", explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannot create a new airplance object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function getAirplane() {
    try{
        const airplances=await airplaneRepository.getAll();
        return airplances;
    }catch(error){
        throw new AppError('Cannot fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
     createAirplane,
     getAirplane
    };
