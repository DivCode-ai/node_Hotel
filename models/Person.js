const mongoose = require('mongoose')



//definign the person schema

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
            type:String,
            enum :['chef','waiter','manager'],
            required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }

})


//creating models from schema

const person = mongoose.model('person',personSchema)

module.exports =person