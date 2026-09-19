import express from 'express'
import { login, signup } from '../Controller/userController.mjs'
import { GetAllProducts, GetProducts, create, deleteProduct, updateProduct } from '../Controller/productController.mjs'
import uploads from '../utils/media.mjs'
import { emailsending } from '../Controller/emailController.mjs'

const myroutes = express.Router()

// User
myroutes.post('/signup', signup)
myroutes.post("/login", login)

// Products
myroutes.post("/createproduct", uploads.single("image"), create)
myroutes.get("/getproducts", GetAllProducts)
myroutes.get("/getproduct/:id", GetProducts)
myroutes.put("/updatepro/:id", uploads.single("image"), updateProduct)
myroutes.delete("/deletepro/:id", deleteProduct)

//Send Email
myroutes.post("/sendEmail",emailsending)
export default myroutes