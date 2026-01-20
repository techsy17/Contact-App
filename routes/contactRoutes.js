const Contacts = require('../models/contact');
const express = require('express');
const router = express.Router();


router.get('/',async(req,res)=>{
   const contacts = await  Contacts.find();
    res.render('index',{contacts});
});


// Show form 
router.get('/add',(req,res)=>{
    res.render('add');
});


// Save contact to database
router.post('/add',async(req,res)=>{
    await Contacts.create({ name :req.body.name,
        phone : req.body.phone,
        email : req.body.email});
    res.redirect('/api');
})


// Delete contact from database 
router.delete('/delete/:id', async (req, res) => {
    console.log('Delete contact Id: ',req.params.id);
    await Contacts.findByIdAndDelete(req.params.id);
    res.redirect('/api');

});


// show edit page 
router.get('/edit/:id',async(req,res)=>{
   const Contact = await Contacts.findById(req.params.id);
    res.render('edit',{Contact});
});



// Update contact from database 
router.put('/edit/:id',async(req,res)=>{
    await Contacts.findByIdAndUpdate(req.params.id,{$set:req.body});
    res.redirect('/api');
})


module.exports = router;