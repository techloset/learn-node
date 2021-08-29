var express = require("express")
var router = express.Router();

let {signup, login} = require('./AuthController')

router.get('/', (req,res)=>{
    res.send("Auth routes are working")
})

router.post('/login', (req,res)=>{
    login(req,res)
})

router.post('/signup', (req,res)=>{
    signup(req,res)
})

module.exports = router;