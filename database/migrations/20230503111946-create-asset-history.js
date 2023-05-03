'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assetHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      serialNumber: {
        type: Sequelize.STRING,
      },
      assetType: {
        type: Sequelize.STRING,
      },
      Make_Model: {
        type: Sequelize.STRING,
      },
      purchaseDate: {
        type: Sequelize.DATE,
      },
      purchaseValue: {
        type: Sequelize.DECIMAL,
      },
      assignedTo: {
        type: Sequelize.STRING,
      },
      assignmentDate: {
        type: Sequelize.DATE,
      },
      returnDate: {
        type: Sequelize.DATE,
      },
      reasonForReturn: {
        type: Sequelize.STRING,
      },
      scrapDate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('assetHistories');
  },
};
