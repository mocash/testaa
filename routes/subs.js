const express = require('express');


const router = express.Router();
const Animal = require('../models/animals')
// const Sub = require('../config/config');



// Getting all
router.get('/',(req,res)=>{
   const findAl = Animal.find()
  .sort({ date: -1 })
  .then(items => console.log(items));

    res.send(findAl)
});
router.get('/green',(req,res)=>{
  res.json({
    "Hello":["Jon", "Smith"]
  })
})



// Getting one

// router.get('/:id',(req,res)=>{
//     res.send('Test 1')
    
// });
// // Creating One.
// router.post('/',(req,res)=>{
//     res.send('Test 1');

// });


// // updating one
// router.patch('/',(req,res)=>{
//     res.send('Test ')

// });


// //Deleting one
// // router.delete('/',(req,res)=>{
// //     res.send('Test 1')

// // });



module.exports = router;