import user from "../Models/user.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY = "abcdef"

//http://localhost:3000/project/signup
export const signup = async(req,res)=>{

    try {
    const {name, email, password} = req.body
    const emailExists = await user.findOne({email: email})
    if(emailExists){
        res.send({message: "Email Already Exist..."})
    }else{
        const newUser = user({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 10),
            role: "user"
        })

        newUser.save()
        res.send({message: "User Register Successfully"})
    }
    } catch (error) {
        res.send({ErrorMessage: error.message})
    }
}

//http://localhost:3000/project/login
export const login =  async(req,res)=>{
    try {
        const {email, password} = req.body
        const login = await user.findOne({email: email})
        if(!login){
            res.send({message: "Email not found", "sts":1})
        }else{
           const token = jwt.sign({userId: login._id},SECRET_KEY,{expiresIn: "1hr"})
           const uname = login.name
           const role = login.role
           const expiresAt = new Date(Date.now()+(60*60*1000))
           const pwd = await bcrypt.compare(password, login.password)
           if(pwd){
            res.send({message: "Login Successfully", "sts":0, "UserName": uname, token, "Role": role})
           }else{
            res.send({message: "Incorrect Password"})
           }
        }
    } catch (error) {
        res.send({ErrorMessage: error.message})
    }
}