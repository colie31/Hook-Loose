'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert(
     "Reviews",
     [
       {
         userId: 1, //userId
         itemId: 1, //itemId
         comment: "Recieved item quick, fits perfectly on my cup", //comment
         userRating: 4, //userRating
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 1, //userId
         itemId: 2, //itemId
         comment: "Purchased for the winter, It's so soft and warm", //comment
         userRating: 5, //userRating
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 2, //userId
         itemId: 6, //itemId
         comment: "Absolutely love it!", //comment
         userRating: 4, //userRating
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 3, //userId
         itemId: 4, //itemId
         comment: "Love the style and colors, I wear it everywhere!", //comment
         userRating: 4, //userRating
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Reviews", null, {});
  }
};
