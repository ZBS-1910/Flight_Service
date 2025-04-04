const { AirplaneRepository } = require('../repositories');
const { StatusCodes } = require("http-status-codes");

const AppError = require('../utils/errors/app_error');

const airplaneRepository = new AirplaneRepository();

// to create a new airplane data
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

// to get all the airplanes data
async function getAirplanes() {
    try{
        const airplances=await airplaneRepository.getAll();
        return airplances;
    }catch(error){
        throw new AppError('Cannot fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// to get a single airplane data
async function getAirplane(id) {
    try{
        const airplane=await airplaneRepository.get(id);
        return airplane;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you rested is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch data of the airport',id,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
// to delete a singele airplane data
async function destroyAirplane(id){
    try{
        const response=await airplaneRepository.destroy(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch data of the airplanes',id,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data) {
    try {
        const airplane = await airplaneRepository.update(data, id);
        return airplane;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to update is not present', error.statusCode)
        }
        throw new AppError('Cannot fetch data of the airplanes', id, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
     createAirplane,
     getAirplanes,
     getAirplane,
     destroyAirplane,
     updateAirplane
    };
