"use strict";

const { UPDATE } = require("sequelize/lib/query-types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Seats", [
      {
        airplaneId: 1,
        row: 1,
        col: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "E",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "E",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3,
        col: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3,
        col: "B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3,
        col: "C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3,
        col: "D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3,
        col: "E",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4,
        col: "A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4,
        col: "B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4,
        col: "C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4,
        col: "D",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 4,
        col: "E",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
