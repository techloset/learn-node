var express = require("express")
var router = express.Router();


router.get('/', (req,res)=>{
    res.send("Auth routes are working")
})

router.get('/login', (req,res)=>{
    res.send("login is wokring")
})

module.exports = router;