import express from 'express'
import { create, del, getAll, update } from '../Controller/userController.mjs'
const myroutes = express.Router()

myroutes.post("/insert", create)
myroutes.get("/fetch", getAll)
myroutes.put("/update/:id", update)
myroutes.delete("/delele/:id", del)

export default myroutes