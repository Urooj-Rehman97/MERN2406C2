import React from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import "./Sidebar.css";
import { Link } from "react-router";


const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

        {/* Logo */}
        <div className="sidebar-logo">

          <div className="logo-box">
            A
          </div>

          <h2>AdminPanel</h2>

          <button
            className="sidebar-close"
            onClick={closeSidebar}
          >
            <X size={22} />
          </button>

        </div>


        {/* Menu */}
        <div className="sidebar-content">

          <p className="sidebar-heading">
            MAIN MENU
          </p>

          <nav>

            <a href="#" className="sidebar-link active">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </a>

            <a href="#" className="sidebar-link">
              <Users size={20} />
              <span>Users</span>
            </a>

            <Link to={"getproducts"} className="sidebar-link">
              <Package size={20} />
              <span>Products</span>
            </Link>

            <a href="#" className="sidebar-link">
              <ShoppingCart size={20} />
              <span>Orders</span>
            </a>

            <a href="#" className="sidebar-link">
              <BarChart3 size={20} />
              <span>Reports</span>
            </a>

          </nav>


          <p className="sidebar-heading settings-heading">
            SETTINGS
          </p>

          <nav>

            <a href="#" className="sidebar-link">
              <Settings size={20} />
              <span>Settings</span>
            </a>

          </nav>

        </div>


        {/* Bottom */}
        <div className="sidebar-bottom">

          <div className="sidebar-user">

            <div className="user-avatar">
              A
            </div>

            <div className="user-info">
              <h4>Admin User</h4>
              <p>Administrator</p>
            </div>

          </div>


          <button className="logout-btn">

            <LogOut size={19} />

            <span>
              Logout
            </span>

          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;