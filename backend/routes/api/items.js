const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const { Item, Category } = require('../../db/models')



router.get('/', asyncHandler( async (req, res) => {
    const response = await Item.findAll({ include: Category });
    res.json(response);
}));
//for individul items
router.get('/:id', asyncHandler( async(req, res) => {
    //get id from params
    //include user, user reviews
    //may need to .parseInit()?
    //find item by id
    //return item id
    //reviews??
}))

module.exports = router;