import React from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
      <Sidebar/>
      <Outlet/>

    </div>
  )
}

export default AdminLayout
