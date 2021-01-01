"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserItem = sequelize.define("UserItem", {
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      bought: DataTypes.BOOLEAN,
      totalAmount: DataTypes.DECIMAL,
    }, {});
  UserItem.associate = function (models) {
  };
  return UserItem;
};
