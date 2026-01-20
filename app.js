// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const contactRoutes = require('./routes/contactRoutes');
// require('dotenv').config();

// const app = express();

// const PORT = process.env.PORT || 3000;
// // middleware 
// app.set('view engine','ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(methodOverride('_method'));
// app.use(express.static('public'));

// mongoose.connect(process.env.DBURI)
//     .then(result=>{
//         app.listen(PORT);
//         console.log('Database connected');
//     })
//     .catch(err=>{
//         console.log(err);
//     })


// app.use('/',contactRoutes);

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();

// middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// app.use(express.static('public'));
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));


// MongoDB connection (cached)
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.DBURI);
  isConnected = true;
  console.log('Database connected');
}

connectDB();

app.use('/api', contactRoutes);

module.exports = app;

