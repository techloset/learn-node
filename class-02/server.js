var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')


var app = express()

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(cors())
 
// 

app.get('/', function (req, res) {  
  req.clientData
    // logics main server
  res.send("Server is working")
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/login', function (req, res) {

    // logics - login
    let resBack = {userId:'213', email:'naveed@techloset.com'}
    res.status(200).json(resBack)
})

app.post('/signup', function (req, res) {
   console.log(req.body)
    // logics > signup
  res.json({name: req.body.name})
})


app.get('/forget', function (req, res) {

    // logics 

  res.send('hello world')
})

// somethingIp:5000/signup

app.listen('5000',(err)=>{

    if(err){
        console.log("something went wrong", error)
    }
    
})

