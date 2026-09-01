import express from 'express';
import add from './math.mjs';
import fs from 'fs'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello! we are learning express.js. Today our first lecture....');
});

app.get('/about` `',(req,res)=>{
    res.send(`<h1>About Us</h1>`)
})

app.get("/data",(req,res)=>{
  res.json({
    "Name":"Abc",
    "Email":"abc@gmail.com",
    "course":"Full Stack"
  })
})

//fs module read and write file
fs.writeFileSync("message.txt","Hello we are Learning Express.js. Today our Topics is Fs Module")
const data = fs.readFileSync("message.txt","utf8")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Sum of given numbers: ${add(10,23)}`)
  console.log(`Message.txt: ${data}`)
});