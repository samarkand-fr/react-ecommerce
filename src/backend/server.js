
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); // Import the cors package
const app = express();
// Middleware to enable CORS (place it before defining routes)
app.use(cors());

const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');



// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB (replace 'your-database-url' with your MongoDB connection string)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use user routes
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);

// Define a default route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the API'); // You can customize this message
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
