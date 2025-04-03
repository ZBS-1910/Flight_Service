const { where } = require("sequelize");
const { Logger } = require("../config");
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
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Somthing  went wrong in the CRUD Repo:destroy ");
      throw error;
    }
  }
  //get a record in CRUD
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Somthing  went wrong in the CRUD Repo:get ");
      throw error;
    }
  }
  //get all records in CRUD
  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Somthing  went wrong in the CRUD Repo:getAll ");
      throw error;
    }
  }
  //update a record in CRUD
  async update(data, id) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Somthing  went wrong in the CRUD Repo:update ");
      throw error;
    }
  }
}
module.exports = CurdRepository;
//CRUD operations
