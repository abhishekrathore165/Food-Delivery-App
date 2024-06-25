import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount,token,setToken } = useContext(Storecontext)
const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
      <ul className='nav-menu'>
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {
          !token?<button onClick={() => setShowLogin(true)}>Sign In</button>
          :<div className='navbar-profile'>
             <img src={assets.profile_icon} alt="" />
             <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout} ><img src={assets.logout_icon} alt="" />Logout</li>
             </ul>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
