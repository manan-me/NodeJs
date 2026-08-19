const express=require('express')
const path=require('path')

const app=express()

const PORT=8000

//Moddlewares
app.set("view engine","ejs")
app.set("views",path.resolve('./Views'))



//Route

app.get('/',(req,res)=>{
    return res.render('home')
})




app.listen(PORT,()=>{
    console.log(`Server started at port : ${PORT}`);
    
})