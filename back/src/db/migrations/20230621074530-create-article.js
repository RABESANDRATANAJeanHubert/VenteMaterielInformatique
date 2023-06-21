'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ArticleName: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      categori_id: {
        type: Sequelize.INTEGER
      },
      TVA: {
        type: Sequelize.INTEGER
      },
      prix_unitaire: {
        type: Sequelize.INTEGER
      },
      prix_HTTC: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};