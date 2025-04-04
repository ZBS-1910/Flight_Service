const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const {SuccessResponce,ErrorResponce}=require('../utils/common')

async function createAirplane(req, res) {
  try {
      const airplane = await AirplaneService.createAirplane({
        modelNumber: req.body.modelNumber,
        capacity: req.body.capacity,
      });

      SuccessResponce.data=airplane;
      return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponce);
  
    } catch (error) {
      ErrorResponce.error=error;
      return res
        .status(error.statusCode)
        .json(ErrorResponce);
    }
}

async function getAirplanes(req, res) {
  try{
    const airplane = await AirplaneService.getAirplane( );
    SuccessResponce.data=airplane;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponce);

  }catch(error){
    ErrorResponce.error=error;
    return res
      .status(error.statusCode)
      .json(ErrorResponce);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
