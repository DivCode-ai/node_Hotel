const express=require("express")
const app =express();

 const db = require('./db'); 
const bodyParser =require('body-parser')

require('dotenv').config();



app.use(bodyParser.json()); ////req.body me store kr dega
const PORT = process.env.PORT || 3000

//Api
// app.get('/',(req,res)=>{
//     res.send('welcome to restaturant .. how can i help you');
// })





       

      

      
       
const personroutes=require('./routes/personRoutes')
app.use('/person',personroutes)

const menuroutes = require('./routes/menuRoutes')
app.use('/menu',menuroutes)




app.listen(PORT,()=>{
    console.log("your server is running")
})