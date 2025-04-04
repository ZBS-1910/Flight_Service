const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const AppError = require("../utils/errors/app_error");
class CurdRepository {
  constructor(model) {
    this.model = model;
  }
  //CRUD operations
  //create, read, update, delete
  //create a new CRUD record
  async create(data) {
    const response = await this.model.create(data);
    return response;
  }
  //destroy a record in CRUD
  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (!response) {
      throw new AppError(
        "Not anle to found the resource",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }
  //get a record in CRUD
  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new AppError(
        "Not able to found the resource",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }
  //get all records in CRUD
  async getAll(data) {
    const response = await this.model.findAll();
    return response;
  }


  //update a record in CRUD
  
async update(data, id) {
  const [updatedRows] = await this.model.update(data, { where: { id } });

  if (updatedRows === 0) {
    throw new AppError("Airplane not found", StatusCodes.NOT_FOUND);
  }
  const response = await this.model.findByPk(id);

  return response;
}
  }
  



module.exports = CurdRepository;
//CRUD operations
