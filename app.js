const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
// middleware 
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

mongoose.connect(process.env.DBURI)
    .then(result=>{
        app.listen(PORT);
        console.log('Database connected');
    })
    .catch(err=>{
        console.log(err);
    })


app.use('/',contactRoutes);
