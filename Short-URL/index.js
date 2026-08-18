const express = require("express");
const path=require("path")
const app = express();
const cookieParser=require('cookie-parser')
const connectMongoDB = require("./dbConnector");
const {authorization,restrictTo}=require('./Middlewares/auth')





const urlRoute = require("./Routes/url");
const staticRoute=require("./Routes/staticRoute")
const userRoute=require('./Routes/user')





const port = 8001;

connectMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("Mongo DB Connected"))
  .catch((e) => console.log(e));

app.set("view engine","ejs")
app.set("views",path.resolve("./Views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(authorization)




app.use("/url",restrictTo(['NORMAL']),urlRoute)
app.use("/user",userRoute)
app.use("/",staticRoute)


app.listen(port, () => {
  console.log("Server started at " + port);
});
