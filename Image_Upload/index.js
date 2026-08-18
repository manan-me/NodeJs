const express = require("express");
const path=require("path")
const app = express();
const multer=require('multer')



const storage=multer.diskStorage({
  destination:function(req,file,cb){
    return cb(null,'./uploads')
  },
  filename:function(req,file,cb){
    return cb(null,`${Date.now()}__${file.originalname}`)
  }

})

const upload = multer({storage})



const port =8005

app.set("view engine","ejs")
app.set("views",path.resolve("./Views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
  return res.render('homePage')
})

app.post('/upload',upload.single('profilePic'),(req,res)=>{
  
  
  return res.redirect('/')
} )

app.listen(port, () => {
  console.log("Server started at " + port);
});
