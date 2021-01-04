const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const { Item, Category, Review, User } = require('../../db/models')



router.get('/', asyncHandler( async (req, res) => {
    // const response = await Item.findAll({ include: [Category, Review, User] });
    const response = await Item.findAll({ include: 
        [{ model: Category },
         { model: User },
         { model: Review, include: User }]
     });
    res.json(response);
}));


module.exports = router;