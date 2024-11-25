// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for contact messages
const contacts = [];

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    contacts.push({ name, email, message, date: new Date() });
    console.log('New contact message received:', { name, email, message });
    res.status(200).json({ message: 'Contact message received' });
  } else {
    res.status(400).json({ error: 'All fields are required' });
  }
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    contacts.push({ email, password, date: new Date() });
    console.log('New contact message received:', { email, password, });
    res.status(200).json({ message: 'Contact message received' });
  } else {
    res.status(400).json({ error: 'All fields are required' });
  }
});

app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
