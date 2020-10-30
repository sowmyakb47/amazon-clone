import React from "react";
import "./DropDown.css";

function DropDown() {
  return (
    <div className="dropdown">
      <select className="dropdown_select">
        <option>All Department</option>
        <option>Books</option>
        <option>Women Fashion</option>
        <option>Men Fashion</option>
        <option>Home Furniture</option>
        <option>Kids Store</option>
      </select>
    </div>
  );
}

export default DropDown;
