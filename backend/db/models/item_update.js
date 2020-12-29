'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item_Update = sequelize.define('Item_Update', {
    name: DataTypes.STRING,
    amountSold: DataTypes.INTEGER
  }, {});
  Item_Update.associate = function(models) {
    // associations can be defined here
  };
  return Item_Update;
};