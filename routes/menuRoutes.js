const express = require('express');
const router = express.Router();

const mymenu = require('./../models/mymenu')




router.post('/',async(req,res)=>{
    try { 
        const mydata=req.body;

       const newmenu= new mymenu(mydata)
               const response=await newmenu.save()
               res.status(200).json(response)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
        
    }
   

   })

   router.get('/',async(req,res)=>{
    try {const mybody= await mymenu.find();

        res.status(200).json(mybody)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
        
    }
    

   })


    
//comment added for testing purposes
   module.exports=router