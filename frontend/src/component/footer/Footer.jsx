import React from 'react'
import './footer.css'
import { assets } from '../assets/assets'
const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-content">
                <div className="content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugit inventore magni iste animi perspiciatis magnam nobis nemo a veritatis laborum, exercitationem numquam.</p>
                    <div className="icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+123-456-7899</li>
                        <li>companytomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy">Copyright 2024 © Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer
