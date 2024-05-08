const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const noteRoutes = require('./routes/note-routes');

const app = express();

// Create the backend of your midterm keeper app project. Functionality should be - the data doesn’t go away upon refreshing since you added the backend and database.

const MONGODB_URI = 'mongodb+srv://enrista:dbuserdbuser@cluster0.qxba678.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// 'mongodb+srv://emi2112:Luffy@cluster0.qxba678.mongodb.net/';


// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  
app.use(cors());
app.use(express.json());

app.use('/notes', noteRoutes);

app.get('/', (req, res) => {
res.json({ message: 'API works' });
});
  
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});