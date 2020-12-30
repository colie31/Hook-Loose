'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    userRating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Item, { foreignKey: "itemId" });
    Review.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Review;
};