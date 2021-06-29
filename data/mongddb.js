const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';

mongoose .connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true })


mongoose.connection.once("open",()=>{
    console.log("connected");
    

}).on("error",(error)=>{
    console.log(error);
    
});