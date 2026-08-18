const express=require("express");
const {handleGenerateNewSortURL,handleTest,handleRedirctUser,handleGetAnalytics}=require('../Controllers/url')

const { handleAddUser } = require("../../Project_01/Controllers/users");

const router=express.Router();


router.post('/',handleGenerateNewSortURL)

router.get('/:id', handleRedirctUser)
router.get('/analytics/:id',handleGetAnalytics)
router.get("/check/test",handleTest)




module.exports=router