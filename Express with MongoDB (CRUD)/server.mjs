import express from 'express';
import { database } from './Connection/Connection.mjs';
import { ObjectId } from 'mongodb';
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Create
//http://localhost:3000/create
app.post("/create", async(req,res)=>{
  try {
    const {Title, Likes, Comments} = req.body
    const result = await database.collection("Posts").insertOne({Title, Likes, Comments})
    res.send({message: "Post Created Successfully", result})
  } catch (error) {
    res.send({ErrorMessage: error})
  }

})

//http://localhost:3000/getAll
app.get("/getAll", async(req,res)=>{
  try {
    const result = await database.collection("Posts").find({}).toArray()
    res.send({result})
  } catch (error) {
    res.send({ErrorMessage: error})
  }
})
//http://localhost:3000/getById/:id
app.get("/getById/:id", async(req,res)=>{
  try {
    const id = req.params.id
    const result = await database.collection("Posts").findOne({_id: new ObjectId(id)})
    res.send({result})
    console.log(id)
  } catch (error) {
    res.send({ErrorMessage: error})
  }
})

//http://localhost:3000/update/:id
app.put("/update/:id", async(req,res)=>{
try {
  const id = req.params.id
  const result = await database.collection("Posts").findOneAndUpdate({_id: new ObjectId(id)}, {$set: req.body})
  res.send({message:"Post Updated Successfully", result})
} catch (error) {
  res.send({ErrorMessage: error})
}
})

// http://localhost:3000/delete/:id
app.delete("/delete/:id", async(req,res)=>{
  try {
    const id = req.params.id
    const result = await database.collection("Posts").findOneAndDelete({_id: new ObjectId(id)})
    res.send({message: "Post Deleted Successfully"})
  } catch (error) {
    res.send({ErrorMessage: error})

  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})