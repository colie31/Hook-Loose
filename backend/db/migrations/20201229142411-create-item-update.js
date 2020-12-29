'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Items", "name", Sequelize.STRING(20)),
      queryInterface.addColumn("Items", "amountSold", Sequelize.INTEGER),
    ]);
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      // name: {
      //   type: Sequelize.STRING
      // },
      // amountSold: {
      //   type: Sequelize.INTEGER
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Item_Updates');
  }
};