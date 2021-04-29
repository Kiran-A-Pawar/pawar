const express = require("express");
const  Contact = require("../models/contact")
const router = new express.Router();

router.post("/contact",async(req,res)=>{
    try{
const addingContactRecords = new Contact(req.body)
     console.log(req.body)
   const inserContact = await addingContactRecords.save();
   res.send(inserContact)
 
    }catch(e){
      res.status(400).send(e)
    }

})


router.get("/contact",async(req,res)=>{
    try{

       const getcontacts = await Contact.find({});
   res.send(getcontacts)
 
    }catch(e){
      res.status(201).send(e)
    }

})



router.get("/contact/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getcontact = await Contact.findById(_id);
   res.send(getcontact)
 
    }catch(e){
      res.status(201).send(e)
    }

})



router.patch("/contact/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getcontact = await Contact.findByIdAndUpdate(_id,req.body, { new : true
           
       });
   res.send(getcontact)
 
    }catch(e){
      res.status(500).send(e)
    }

})

router.delete("/contact/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getcontact = await Contact.findByIdAndDelete(req.params.id);
   res.send(getcontact)
 
    }catch(e){
      res.status(500).send(e)
    }

})


module.exports = router;