const fs=require("fs")

function logReqRes(filename){
    return (req,res,next)=>{
       
  fs.appendFile(
    filename,
    `\n{Date.now()}: ${req.path}: ${req.method}`,
    () => {
      next();
    },
  );

  // console.log("Hello from middle ware 2",req.myName);
  // res.send({name:"mideleware2"})
}
    }

    module.exports=logReqRes
