'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    rating: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    url: DataTypes.STRING,
    favorite: DataTypes.BOOLEAN
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};