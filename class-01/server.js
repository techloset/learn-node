var express = require('express')
var app = express()


app.get('/', function (req, res) {  
    // logics main server
  console.log("simple log");
  res.send('hello world')
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/login', function (req, res) {

    // logics - login

  res.json({item:'something'})
})

app.get('/signup', function (req, res) {

    // logics > signup

  res.send('hello world')
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