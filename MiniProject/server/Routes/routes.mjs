import express from 'express'
import { login, signup } from '../Controller/userController.mjs'

const myroutes = express.Router()

myroutes.post('/signup', signup)
myroutes.post("/login", login)

export default myroutes