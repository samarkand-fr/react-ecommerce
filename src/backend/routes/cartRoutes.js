// cartRoutes.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const User = require('../models/user');

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

// Route to add items to the cart
router.post('/add', isAuthenticated, async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the product exists
    // This is where you might want to integrate with your external API
    // For simplicity, we're assuming productId corresponds to an existing product

    // Create or update the cart
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItem = cart.items.find(item => item.productId === productId);

    if (existingItem) {
      // Update quantity if the item is already in the cart
      existingItem.quantity += quantity;
    } else {
      // Add a new item to the cart
      cart.items.push({ productId, quantity });
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get the cart for a specific user
router.get('/:userId', isAuthenticated, async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add more routes for updating and deleting items from the cart as needed

module.exports = router;
