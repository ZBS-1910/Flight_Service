const express= require('express');
const router= express.Router();
const {AirplaneController}=require('../../controllers');
const{AirplaneMiddlewares}=require('../../middlewares')



// /api/v1/airplanes post req
router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);


module.exports= router; 