const express = require("express");

require('dotenv').config();

const app = express();

const port = 4000;

const data = fetch() 



app.get('/' , (req , res)=>{
  res.send("Hello World");
})

app.get('/twitter' ,(req , res)=>{
  res.send("https://twitter.com");
})

app.get('/login' , (req , res)=>{
  res.send('<h1> Please login </h1>')
})

app.get('/cofee' , (req , res) =>{
  res.send('<h2>Wait some time You will get your coffee </h2>');
})

app.listen(process.env.PORT , ()=>{
  console.log(`server is running at http://localhost:${port}`);
})
