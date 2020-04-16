require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const routerPosts = require('./routes/posts');

const app = express();

app.use(express.json());
app.use('/posts', routerPosts);

mongoose.connect(
  process.env.DB_CONNECTION, 
  { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
  },
  () => console.log('connected to dabase!!')
);

app.listen(3000, () => console.log('listening to port 3000'));