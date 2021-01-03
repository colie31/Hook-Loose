'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserItem = sequelize.define('UserItem', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  UserItem.associate = function(models) {
    UserItem.belongsTo(models.Item, { foreignKey: "itemId" });
    UserItem.belongsTo(models.User, { foreignKey: "userId" });
  };
  return UserItem;
};