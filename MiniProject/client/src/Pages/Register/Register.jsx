import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'

const Register = () => {
    const form = useForm()
    const { register, handleSubmit, control, formState: { errors } } = form
    // const [userdt, setUserdt] = useState({
    //     name: "",
    //     email: "",
    //     password: ""
    // })

    // const InputChange = (e)=>{
    //     const {name, value} = e.target
    //     setUserdt({
    //         ...userdt,
    //         [name]:value
    //     })
    // }

    const submitData = async (data) => {
        // e.preventDefault()
        try {
            const result = await axios.post("http://localhost:3000/project/signup", data)
            console.log(result)
            
            alert(result.data.message)
            console.log(result.data.message)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <center>
            {/* <!-- From Uiverse.io by ammarsaa -->  */}
            <form className="form" onSubmit={handleSubmit(submitData)}>
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>

                <label>
                    <input className="input" type="text" placeholder="" required="" name="name" {...register("name", {
                        required: "Must enter your fullName",
                        minLength: {
                            value: 3,
                            message: "Your Full name must contain atleast 3 letters"
                        }
                    })} />
                    <span>FullName</span>
                </label>
                <span style={{ "fontSize": "8", "color": "red", "marginTop": "0" }}>{errors.name?.message}</span>

                <label>
                    <input className="input" type="email" placeholder="" required="" name="email" {...register("email", { required: "Must enter your Email", 
                        pattern:{
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid Email"
                        }
                    })} />
                    <span>Email</span>
                </label>
                <span style={{ "fontSize": "8", "color": "red", "marginTop": "0" }}>{errors.email?.message}</span>


                <label>
                    <input className="input" type="password" placeholder="" required="" name="password" {...register("password",{required: "Must set your Password",
                        minLength: {
                            value:8,
                            message: "Your password must contain atleasat 8 characters"
                        }
                    })} />
                    <span>Password</span>
                    <span style={{ "fontSize": "8", "color": "red", "marginTop": "0" }}>{errors.password?.message}</span>

                </label>

                <button className="submit" onClick={submitData}>Submit</button>
                <p className="signin">Already have an acount ? <Link to={"/login"}>Login</Link> </p>
            </form>
        </center>
    )
}

export default Register
