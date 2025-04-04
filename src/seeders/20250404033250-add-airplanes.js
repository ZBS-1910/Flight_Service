'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'Boeing 747',
      capacity: 660,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Airbus A380',
      capacity: 850,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Boeing 737',
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Airbus A320',
      capacity: 180,
      createdAt: new Date(),
      updatedAt: new Date()
    
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "Airplanes", 
      {
        [Op.or]: [
          { modelNumber: "Boeing 747" }
        ]
      });
  }

}