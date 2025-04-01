const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      data: airplane, // ✅ Fix: Send the created airplane object
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false, // ✅ Fix: Change to false for errors
      message: "Something went wrong while creating airplane",
      data: {},
      error: error.message, // Optional: Send error message instead of full error object
    });
  }
}

module.exports = {
  createAirplane,
};
