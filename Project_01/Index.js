const express = require("express");
const connectMongoDB = require("./dbConnection")
const logReqRes = require("./middlewares/index")
const userRoter=require("./Routes/user")


const app = express();
const port = 8000;




//Connection

connectMongoDB("mongodb://127.0.0.1:27017/mongo-project-01")
  .then(() => console.log("Mongo db Connected"))
  .catch((e) => console.log(e.message));



//Middleware -plugin

app.use(express.urlencoded({ extended: false }));

// app.use((req,res,next)=>{
//     console.log("Hello from middle ware 1");
//     req.myName='Abdul Manan'
//     // res.send({name:"mideleware1"})
//     next()
// })

app.use(logReqRes('./log.txt'));

app.use('/',userRoter)

app.listen(port, () => console.log(`Server started at ${port}`));
