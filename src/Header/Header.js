import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DropDown from "../Dropdown/DropDown";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase/firebase";

function Header() {
  const [{basket,user}]=useStateValue();

const signOut=()=>{
  if(user){
    auth.signOut();
  }
}

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <DropDown />
        <input type="text" className="header_searchInput" placeholder="Enter your search query" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav" >
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={signOut}>
          <span className="header_optionLineOne">{user?`Hello ${user.email.slice(0,6)}`:'Hello Guest'}</span>
          <span className="header_optionLineTwo">{user?'signOut':'signIn'}</span>
        </div></Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_optionbasket">
          <Link to="/checkOut">
            <ShoppingBasketIcon /> </Link>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
