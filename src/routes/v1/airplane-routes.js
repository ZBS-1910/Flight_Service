const express= require('express');
const router= express.Router();
const {AirplaneController}=require('../../controllers');

// /api/v1/airplanes post req
router.post('/', AirplaneController.createAirplane);


module.exports= router; 