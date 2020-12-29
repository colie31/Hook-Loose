'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const categories = await  queryInterface.bulkInsert(
     "Category",
     [
       {
         name: "Hat",
       },
       {
         name: "Cup Cozie",
       },
       {
         name: "Scarf",
       },
       {
         name: "Other",
       },
     ],
     { returning: true }
   );

    const items = await queryInterface.bulkInsert(
      "Item",
      [
        {
          name: 'Teal Cup Cozy',
          description: "handmade cup cozie that fits perfectly on any everyday mug. Made with Lion Brand yarn and a heart shaped button to keep your cozy in place. recommend hand washing fabric.",
          price: 5.00,
          rating: 0,
          quantity: 10,
          url: ''


        },
       
      ],
      { returning: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
