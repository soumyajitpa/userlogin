const express = require('express');
const path = require('path');
const connectDB = require('./connection'); // Connect to MongoDB

const app = express();

// Connect to the MongoDB database
connectDB();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Path to the 'views' folder

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data from POST requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Route to render the login page
app.get('/login', (req, res) => {
  res.render('login');  // Renders login.ejs
});

// Route to handle login form submission
const User = require('./models/user'); // Import the User model

app.post('/login', async (req, res) => {
  console.log('Content-Type:', req.headers['content-type']);
  console.log('Request Body:', req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  try {
    // Create a new user instance
    const newUser = new User({
      email,
      password  // Make sure to hash passwords in real-world applications
    });

    // Save the user to the database
    await newUser.save();

    res.send(`User with email: ${email} has been stored in the database.`);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});











