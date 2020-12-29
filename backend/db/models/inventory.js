'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    categoryId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here
  };
  return Inventory;
};