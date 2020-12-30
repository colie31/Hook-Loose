'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    rating: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    url: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {});
  Item.associate = function(models) {
    const columnMapping2 = {
      through: "UserItem",
      otherKey: "userId",
      foreignKey: "itemId"
    }

    Item.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Item.hasMany(models.Review, { foreignKey: 'itemId' });
    Item.belongsToMany(models.User, columnMapping2);
  };
  return Item;
};