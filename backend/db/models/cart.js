'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    bought: DataTypes.BOOLEAN,
    totalAmount: DataTypes.DECIMAL
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};