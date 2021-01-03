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
     "UserItems",
     [
       {
         userId: 1,
         itemId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 1,
         itemId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 2,
         itemId: 6,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         userId: 3,
         itemId: 4,
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
   return queryInterface.bulkDelete("UserItems", null, {});
  }
};
