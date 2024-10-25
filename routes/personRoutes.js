const express = require('express');
const router = express.Router();
const person = require('./../models/Person');


router.post('/',async(req, res)=>{
    try{
        const data =req.body //  assuing the req body contain the incoming data


   // creating a new person document usin the mongoose moderl

   const newperson = new person(data);

   //saving the newperson to database
               const response= await newperson.save()
               res.status(200).json(response)

    }
    catch(error){
            console.log(error);
            res.status(500).json({reere:"internal server error"})

    }
   
   })


   router.get('/',async(req,res)=>{
    try{

      const data = await  person.find();
      console.log("data fetched")
      res.status(200).json(data)

    }catch(error){
        console.log("myerror came")
        res.status(500).json({error:"here u got some error"})

    }
   })

   router.get('/:workType',async(req,res)=>{

    try {
        
       const workType=req.params.workType;
       if(workType=='chef'||workType=='manager'||workType=='waiter')
        var response=await person.find({work: workType})
        console.log("data fetched")
        res.status(200).json(response)
        
    } catch (error) {
        console.log("myerror came")
        res.status(500).json({error:"here u got some error"})
        
    }
   
   })

   router.put('/:id',async(req,res)=>{

    try {
    const  personID= req.params.id;
  const updatedData = req.body;
  const response = await person.findByIdAndUpdate(personID,updatedData,{
        new:true,
        runValidators:true,
  })
  if(!response){
    return res.status(404).json({error:'person not found'})
  }
  console.log("data updated");
  res.status(200).json(response);
        
    } catch (error) {
        console.log("myerror came")
        res.status(500).json({error:"here u got some error"})
        
        
    }
  
   })


   router.delete('/:id',async(req,res)=>{
    try {
        const id= req.params.id;
   const body = await person.findByIdAndDelete(id);
   if(!response){
    return res.status(404).json({error:'person not found'})
  }
   res.status(200).json({success:'data deleted'})
    } catch (error) {
        console.log("myerror came")
        res.status(500).json({error:"here u got some error"})
        
    }
   const id= req.params.id;
   const body = await person.findByIdAndDelete(id);
   })


module.exports=router;