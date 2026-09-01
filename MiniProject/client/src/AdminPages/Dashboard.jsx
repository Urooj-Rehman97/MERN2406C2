import React from 'react'
import { useNavigate } from 'react-router'

const Dashboard = () => {
  const navigate = useNavigate()
  const Logout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("UserName")
    navigate("/login")
  }
  return (
    <div>
      <h1>Admin Dashboard...</h1>
      <button className='mt-3 btn btn-danger' onClick={Logout}>Logout</button>
    </div>
  )
}

export default Dashboard
