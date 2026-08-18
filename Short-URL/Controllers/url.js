const {nanoid}=require("nanoid")
const URL=require("../Models/url")


async function handleGenerateNewSortURL(req,res){

    const body=req.body
    if(!body.url) return res.status(400).json({msg:"Url is required..."})
    const ID=nanoid(8)
    await URL.create({
        shortId:ID,
        redirectUrl:body.url,
        visitHistory:[],
        createdBy:req.user.id
    })

    return res.status(201).render('home',{id:ID})


}

async function handleRedirctUser(req,res){
    const shortId=req.params.id
    const response=await URL.findOneAndUpdate({shortId},{$push : {
        visitHistory:{
            timestamps:Date.now()
        }
    }})

    return res.status(200).redirect(response.redirectUrl)


}


async function handleGetAnalytics(req,res){
    const shortId=req.params.id
    const result=await URL.findOne({shortId})
    return res.status(200).json({totlaClicks:result.visitHistory.length , analytics:result.visitHistory})
}

async function handleTest(req,res){
    const allUsers=await URL.find({})
    return res.render('home' ,{
        urls:allUsers
    })
}


module.exports={
    handleGenerateNewSortURL,
    handleRedirctUser,
    handleGetAnalytics,
    handleTest
}