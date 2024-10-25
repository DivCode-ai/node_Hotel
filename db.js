const mongoose = require("mongoose")
require('dotenv').config();

//defingin thwe mongodb connection url



//const mongoURL =process.env.MONGO_URL_LOCAL
const mongoURL=process.env.MONGODB_URL
//setup connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//mongoose maintain a default connection object representing the mongodb connection
const db =mongoose.connection;


//dfine event listeners for database connection

db.on('connected',()=>{
    console.log("connected to mongodb")
})
db.on('error',()=>{
    console.log(" error in connection to mongodb")
})
db.on('disconnected',()=>{
    console.log("disconnected to mongodb")
})

//export the connection to use it to another part of application
module.exports = db;
