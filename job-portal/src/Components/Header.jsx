import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header className="pagenav">
    <div className="nav-container">
      <div className="logo">
        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : "")}>Job Page</NavLink>
      </div>
      <nav className= "nav-links">
        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : "")}>Home</NavLink>
        <NavLink to="/jobs" className={({isActive}) => (isActive ? 'active' : "")} >Jobs</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : "")} >About</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : "")} >Contact</NavLink>
      </nav>
      <div className="auth-button">
        <NavLink to="/login" className={({isActive}) => (isActive ? "active-btn" : "btn")}>Login</NavLink>
        <NavLink to="/register" className={({isActive}) => (isActive ? "active-btn" : "btn")}>Register</NavLink>
      </div>
    </div>
      <h2 className="page-name">JOBS</h2>
    </header>
  </>
  )
}

export default Header;