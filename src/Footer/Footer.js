import React from "react";
import "./Footer.css";
import Back2Top from 'react-back2top';

function Footer() {
  return (
    <div className="footer">
    <Back2Top><div className="backtotTop">Back to Top</div></Back2Top> 
     <div className="footer_row">
     <div className="row">
       <div>Get to Know Us</div>
       <ul>
         <li>Careers</li>
         <li>Blog</li>
         <li>About Amazon</li>
         <li>Amazon Devices</li>
         <li>Investor Relations</li>
       </ul>
    </div>  
    <div className="row">
       <div>Make Money with Us</div>
       <ul>
         <li>Sell products on Amazon</li>
         <li>Sell apps on Amazon</li>
         <li>Become an Affiliate</li>
         <li>Advertise Your Products</li>
         <li>Self-Publish with Us</li>
         <li>Host an Amazon Hub</li>
       </ul>
    </div>
     <div className="row">
       <div>Amazon Payment Products</div>
       <ul>
         <li>Amazon Business Card</li>
         <li>Shop with Points</li>
         <li>Reload Your Balance</li>
         <li>Amazon Devices</li>
         <li>Amazon Currency Converter</li>
       </ul>
    </div>
    <div className="row">
       <div>Let Us Help You</div>
       <ul>
         <li>Amazon and COVID-19</li>
         <li>Your Account</li>
         <li>	Your Orders</li>
         <li>Shipping Rates & Policies</li>
         <li>Returns & Replacements</li>
         <li>Manage Your Content and Devices</li>
       </ul>
    </div>
    </div> 
  </div>
  );
}

export default Footer;
