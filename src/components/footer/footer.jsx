import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaTiktok } from "react-icons/fa6";
import { india } from '../../assets';



export const FooterLinks = () => {
  return (
    <div className="footer-links">
    <p className="head">
      Company
    </p>
    <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Blog it</li>
      <li>Shop in</li>
    </ul>
  </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="main-container-1">
        <div className="child-1">
          <p className="text-1">Want to be part of our collective?</p>
          <p className="text-2">Be the first to receive innovative new product launches, perspectives and technologies, direct to your inbox. To introduce you to our world, we are offering 10% off your first order.</p>

          <table>
            <tr>
              <td>
                <input type="text" placeholder=" Email" />
              </td>
              <td>
                <input type="text" placeholder='Name'/>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="table-button">
                <button>Subscribe</button>
                </div>
                
              </td>
            </tr>
          </table>

          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>

        <div className="child-2">
          © 2025 PANGAIA. Designing a better future. Credits
        </div>
      </div>
      <div className="main-container-2">
        <div className="child-1">

         <FooterLinks/>
         
         <FooterLinks/>
         
         <FooterLinks/>
         
      <div className="footer-links">

      </div>

        </div>
        <div className="child-2">
          <div className="inner-child">
            <div className="image">
              <img src={india} alt="" />
            </div>
            <div className="text">
              <p>India (INR ₹) </p>
             
            </div>
          </div>
          <div className="inner-child"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer