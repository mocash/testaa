const express = require('express');
const passport = require('passport');
const mongoose =require('mongoose');
require('./data/mongddb')


const app = express();

app.use(express.json());



Animal.find()
  .sort({ date: -1 })
  .then(items => console.log(items));

const subRouter = require('./routes/subs');
app.use('/subs', subRouter);

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=> console.log("We Are running " + PORT));