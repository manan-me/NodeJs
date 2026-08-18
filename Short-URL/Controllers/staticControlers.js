const URL=require("../Models/url")


async function handleHome(req,res){
    // if(!req.user) return res.redirect('/login')
    const allUsers=await URL.find({createdBy:req.user.id})
    return res.render('home' ,{
        urls:allUsers
    })
}
async function handleAdminHome(req,res){
    // if(!req.user) return res.redirect('/login')
    const allUsers=await URL.find({})
    return res.render('home' ,{
        urls:allUsers
    })
}
async function handleSignUp(req,res){
    return res.render('signUp')
}
async function handleLogin(req,res){
    return res.render('login')
}



module.exports={
    handleHome,
    handleSignUp,
    handleLogin,
    handleAdminHome,
}