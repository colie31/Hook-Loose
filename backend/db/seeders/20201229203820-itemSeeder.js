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
     "Items",
     [
       {
         name: "Beige Tall Cup Cozy", //string
         amountSold: 12, //integer
         description:
           "Handmade cup cozy that fits your everyday tall cups. Recommend handwashing product. Made with Lion Brand yarn.", //text
         price: 4.5, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url: "https://hookpics.s3.us-east-2.amazonaws.com/Beige+tall+cup+cozy", //string
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 3,
       },
       {
         name: "Beige-Grey Long Scarf", //string
         amountSold: 20, //integer
         description:
           'Handmade 20" scarf, great for winter weather or pair with any outfit. Recommend handwashing product.', //text
         price: 18.0, //decimal
         rating: 4.5,
         quantity: 10, //integer
         url:
           "https://hookpics.s3.us-east-2.amazonaws.com/Beige-Grey+long+scarf", //string
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 1,
       },
       {
         name: "Blue-Green Infinity Scarf", //string
         amountSold: 17, //integer
         description:
           "Handmade infinity scarf, great for winter weather or pair with any outfit. Recommend handwashing product.", //text  
         price: 15.5, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url:
           "https://hookpics.s3.us-east-2.amazonaws.com/Blue-Green+infinity+scarf", //string  
           createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 1,
       },
       {
         name: "Blue-Grey Bun Hat", //string
         amountSold: 15, //integer
         description:
           "Handmade crocheted hat, perfect for updos. Recommend handwashing product.", //text  
         price: 10.0, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url: "https://hookpics.s3.us-east-2.amazonaws.com/Blue-Grey+bun+hat", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 2,
       },
       {
         name: "Grey Headband", //string
         amountSold: 12, //integer
         description:
           "Handmade crocheted headband. Perfect for keeping warm in cold weather. Recommend handwashing product.", //text  createdAt: new Date(),
         updatedAt: new Date(),
         price: 8.5, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url: "https://hookpics.s3.us-east-2.amazonaws.com/Grey+headband", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 5,
       },
       {
         name: "Teal Cup Cozy", //string
         amountSold: 20, //integer
         description:
           "Handmade cup cozy for mugs. crocheted from Lion Brand yarn and includes a heart-shaped button to keep cozy in place. Recommend handwashing product.", //text
         price: 5.5, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url: "https://hookpics.s3.us-east-2.amazonaws.com/teal+cup+cozy", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 3,
       },
       {
         name: "Pumpkin Cup Cozy", //string
         amountSold: 20, //integer
         description:
           "Handmade cup cozy for mugs. crocheted from Lion Brand yarn and includes a convenient button to keep cozy in place. Recommend handwashing product.", //text
         price: 5.5, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url: "https://hookpics.s3.us-east-2.amazonaws.com/Pumpkin+cup+cozy", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 3,
       },
       {
         name: "Pink-White Bun Hat", //string
         amountSold: 15, //integer
         description:
           "Handmade crocheted hat, perfect for updos. Recommend handwashing product.", //text
         price: 10.0, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url: "https://hookpics.s3.us-east-2.amazonaws.com/Pink-White+bun+hat", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 2,
       },
       {
         name: "Pink Bun Hat", //string
         amountSold: 15, //integer
         description:
           "Handmade crocheted hat, perfect for updos. Recommend handwashing product.", //text
         price: 10.0, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url: "https://hookpics.s3.us-east-2.amazonaws.com/Pink+bun+hat", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 2,
       },
       {
         name: "Multicolored Tall Cup Cozy", //string
         amountSold: 12, //integer
         description:
           "Handmade cup cozy that fits your everyday tall cups. Recommend handwashing product. Made with Lion Brand yarn.", //text
         price: 4.5, //decimal
         rating: 4.0,
         quantity: 10, //integer
         url:
           "https://hookpics.s3.us-east-2.amazonaws.com/Multicolored+cup+cozy", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 3,
       },
       {
         name: "Blue-Grey-Red Long Scarf", //string
         amountSold: 20, //integer
         description:
           'Handmade 20" scarf, great for winter weather or pair with any outfit. Recommend handwashing product.', //text
         price: 18.0, //decimal
         rating: 4.5,
         quantity: 16, //integer
         url:
           "https://hookpics.s3.us-east-2.amazonaws.com/Blue-Grey-Red+long+scarf", //string  
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId: 1,
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
   return queryInterface.bulkDelete("Items", null, {});
  }
};
