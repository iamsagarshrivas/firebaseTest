const express = require('express')
const path = require('path');
var app = express();

const port = process.env.PORT || 3001;

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/first',(req,res)=>{
  res.json('hello');
})


app.listen(port,
  () => {
    console.log("listening on port", port);
  }
);