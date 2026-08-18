// const {getUser}=require('../Service/auth')

const { getUser } = require("../Service/auth")

// async function onlyLoggedUserAccess(req,res,next){
//     const userId=req.cookies?.uid

//     if(!userId) return res.redirect('/login')
        
//         const user=getUser(userId)
        
//     if(!user) return res.redirect('/login')

//         req.user=user
//         next()
// }
// async function checkAuthorization(req,res,next){
//     const userId=req.cookies?.uid

        
//         const user=getUser(userId)
        

//         req.user=user
//         next()
// }

function  authorization(req,res,next){
    const userId=req.cookies?.uid
     req.user=null
    if(!userId) return next()
    
    const user=getUser(userId)
    req.user=user
    
    return next()

}

function restrictTo(roles=[]){
    return function (req,res,next){

       if(!req.user) return res.redirect('/login')
    if(!roles.includes(req.user?.role)) return res.end('UnAuthorized')
    return next()
}
}

 module.exports={
    authorization,
    restrictTo
 }

// module.exports={onlyLoggedUserAccess,
//     checkAuthorization,

// }