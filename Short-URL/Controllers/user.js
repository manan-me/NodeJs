
const user=require('../Models/user')
const {v4 : uuidv4}=require("uuid")
const {setUser}=require("../Service/auth")


async function handleUserSignup(req,res){
    const body=req.body
    await user.create({...body})
    return res.redirect('/')

}
async function handleUserLogin(req,res){
    const body=req.body
    const userr=await user.findOne({...body})
    if(!userr){
       return res.render('login' ,{
            error:'!Invalid email or Password'
        })

    }

    // const sessionId=uuidv4()
    //  setUser(sessionId,userr)
    // res.cookie('uid',sessionId)

    const token=setUser(userr)
    res.cookie('uid',token)

    return res.redirect('/')

}


module.exports={
    handleUserSignup,
    handleUserLogin,
    
}