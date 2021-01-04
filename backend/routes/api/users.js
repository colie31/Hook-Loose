const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, UserItem, Review, Item } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

//user buys items
router.post('/cart', requireAuth, asyncHandler(async (req, res) => {
  const cartItems = req.body;
  const user = req.user.id

  Object.values(cartItems).map(async (itemInfo) => {
    await UserItem.create({
      userId: user,
      itemId: itemInfo.item.id,
    })
  });

  res.json({ message: "Successful" })
}))

// get user items and views there reviews
router.get('/purchases', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id
  // const purchases = await User.findByPk(user, {
  //   include: [UserItem, Review]
  // } )
  const purchases = await User.findOne({
    where: {
      id: userId
    },
    include: [Item, Review],
  });
  
  res.json(purchases)
}))

//user edits there reviews

module.exports = router;
