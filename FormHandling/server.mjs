import express from 'express';
const app = express();
const port = 3000;
const users = []

const __dirname = import.meta.dirname;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
//   res.send('Hello World!');
res.sendFile(__dirname+"/index.html")
});

app.post("/", (req,res)=>{
    const {name, email, password} = req.body;
    users.push({name, email, password});
    let result = `
    <h1>Submit Successfully</h1>
    <ul>
    ${users.map(u => `<li>${u.name} - ${u.email} - ${u.password}</li>`).join(" ")}
    </ul>
    `
    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname)
});