const { StatusCodes } = require("http-status-codes");
const { ErrorResponce } = require("../utils/common");
const { message } = require("../utils/common/error-response");
const AppError=require('../utils/errors/app_error');

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponce.message='Somthing went wrong while creating airplane',message;
    ErrorResponce.error= new AppError(["Model number not found in the incomming request in the correct form"],StatusCodes.BAD_REQUEST);
    
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(ErrorResponce);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
 