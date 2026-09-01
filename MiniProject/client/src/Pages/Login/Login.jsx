import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import './Login.css'

const Login = () => {
  const [logindt, setLogindt] = useState({
    "email": "",
    "password": ""
  });
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  const InputChange = (e)=>{
    const {name,value} = e.target;
    setLogindt({
      ...logindt,
      [name]: value
    })
  }
  const SubmitData = async(e)=>{
    e.preventDefault()
    try {
      const result = await axios.post("http://localhost:3000/project/login", logindt)
      if(result.data.sts === 0){
        localStorage.setItem("token", result.data.token)
        localStorage.setItem("UserName", result.data.UserName)
        if(result.data.Role === "admin"){
          setMsg(result.data.message)
          alert("Login Successfully")
          navigate("/dashboard")
        }else{
          setMsg(result.data.message)
          alert("Login Successfully")
          navigate("/")
        }
       
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <center>
<form className="form" onSubmit={SubmitData}>
    <p className="title">Login </p>
    <p className="message">Login now and get full access to our app. </p>
   
            
    <label>
        <input className="input" type="email" placeholder="" required="" name='email' onChange={InputChange}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required="" name='password' onChange={InputChange}/>
        <span>Password</span>
    </label>
   
    <button className="submit" type='submit'>Submit</button>
    <p className="signin">Don't have an account? <Link to={"/register"}>Signup</Link> </p>
</form>
    </center>
  )
}

export default Login
