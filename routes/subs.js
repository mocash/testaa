const express = require('express');

const router = express.Router();





// Getting all
router.get('/',(req,res)=>{
    res.send('Test 1')
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