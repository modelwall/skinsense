const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Dummy array to simulate a database
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];
  
  // Endpoint to get all users
  app.get('/users', (req, res) => {
    res.json(users);
  });
  
  // Endpoint to create a new user
  app.post('/users', (req, res) => {
    const { name } = req.body;
    const newUser = {
      id: users.length + 1,
      name
    };
    users.push(newUser);
    res.status(201).json(newUser);
  });