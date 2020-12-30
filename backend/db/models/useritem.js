'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserItem = sequelize.define('UserItem', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    bought: DataTypes.BOOLEAN,
    totalAmount: DataTypes.DECIMAL
  }, {});
  UserItem.associate = function(models) {
    UserItem.belongsTo(models.User, { foreignKey: 'userId' });
    UserItem.hasMany(models.Item, { foreignKey: 'itemId' })
  };
  return UserItem;
};