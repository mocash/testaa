const express = require('express');
const passport = require('passport');
const mongoose =require('mongoose');
require('./data/mongddb')


const app = express();

app.get('/',(req,res)=>{
    res.send("greeting from Earth");
});

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=> console.log("We Are running " + PORT));