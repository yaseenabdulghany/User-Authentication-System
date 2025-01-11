const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const MONGO_URI = "mongodb+srv://yaseenabdulghany:QtR5OZ5X6L9fCfDy@cluster0.5hich.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB: ', err));

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { username, password , firstname , lastname } = req.body;
  console.log(req.body);
  if (!username || !password || !firstname || !lastname) {
    return res.status(400).send('Email and Password are required');
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const user = new User({
      username,
      password,
      firstname,
      lastname,
    });

    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving user to database');
  }
});

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Email and Password are required');
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User does not exist');
    }

    const isMatch = password === user.password;

    if (!isMatch) {
      return res.status(400).send('Invalid data');
    }

    res.status(200).send('User signed in successfully');

  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing in');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});