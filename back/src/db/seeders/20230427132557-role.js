"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          roleName: "John Doe",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "Marco vikiny",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "Jerome Laundry",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
