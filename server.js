const express=require("express")
const app =express();

 const db = require('./db'); 
const bodyParser =require('body-parser')



app.use(bodyParser.json()); ////req.body me store kr dega

//Api
// app.get('/',(req,res)=>{
//     res.send('welcome to restaturant .. how can i help you');
// })





       

      

      
       
const personroutes=require('./routes/personRoutes')
app.use('/person',personroutes)

const menuroutes = require('./routes/menuRoutes')
app.use('/menu',menuroutes)


app.listen(3000,()=>{
    console.log("your server is running")
})