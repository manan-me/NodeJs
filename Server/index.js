
// // const myServer=http.createServer((req,res)=>{
//     //     // console.log('New Request Recieved');
//     //     // console.log(req.headers);
//     //     console.log(req);
    
//     //     res.end("Hello From Server")
    
//     // })
    
    
// // myServer.listen(8000,()=>{console.log("Server Started");
// // })


// const fs=require("fs")
// const url=require("url")


// function handler(req,res){
//     if(req.url === "/favicon.ico") return res.end()
//         const myUrl=url.parse(req.url,true)
    
//     const log=`${Date.now()} :/${req.method} "; ${req.url}: New Request Received\n`
//     fs.appendFile(__dirname+"/log.txt",log,()=>{
//         switch (myUrl.pathname) {
            
            
            
//             case '/':
//                 res.end("We are on Home buddy")
                
//                 break;
                
                
                
//                 case '/contact':
//                     res.end("Lets Contact buddy")
                    
//                     break;
                    
                    
                    
//                     case '/about':
//                         const userName=myUrl.query.myname
//                         res.end(`You don't know about ${userName}`)
                        
//                         break;
                        
                        
                        
//                         case '/search':
//                             const search=myUrl.query.query_search
//                             res.end(`You don't know about ${search}`)
                            
//                             break;
                            
                            
                            
//                             case '/signup':
//                                 if(req.method==='GET') res.end('Rnder Signup')
//                                     else if(req.method==="POST"){
//                                 //Some query for dbb to store data 
//                                 res.end("Success")
//                             }
                            
//                             break;
                            
                            
                            
                            
//                             default:
//                                 res.end("404 not Found!!!")
//                                 break;
//                             }
//                         })
//                     }



                    
// const http=require("http")
const express=require("express")
const app=express()

app.get('/', (req,res)=>{
  res.end("Wellocome to home Exprees")

})
app.get('/about', (req,res)=>{
  res.end("Wellocome to about Exprees, hey " + req.query.name + " your age is "+ req.query.age)

})

// const newServer=http.createServer(app)


// newServer.listen(8000,()=>console.log("Lets Funn Bro"));
app.listen(8000,()=>console.log("Lets Funn Bro"))