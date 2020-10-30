import React,{forwardRef} from "react";
import "./CheckOut.css";
import Subtotal from "../Subtotal/Subtotal";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../context/StateProvider";
import FlipMove from 'react-flip-move'


const FunctionalArticle = forwardRef((item, ref) => (
  <div ref={ref}>
    <BasketItem price={item.price} title={item.title} image={item.image} rating={item.rating} id={item.id}/>
  </div>
));


function CheckOut() {
  const [{user,basket}]=useStateValue();
  return (
    <div className="checkout">
      {/*
       <div className="checkout_details">
       <img
         src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
         className="checkout_image"
         alt=""
       />
       <h1>Your Amazon Cart is empty</h1>
     </div> */}
     <div className="checkout_box">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_add"
        />
        <h1 style={{color:"blue"}}>{user?`Hello ${user?.email.slice(0,6)}`:''}</h1>
        <h2 className="checkout_title">Your Shopping Basket</h2>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
      </div>
      <FlipMove>
      {
      basket.map((item,index)=>
      (
        <div>
          <FunctionalArticle key={index} {...item}/>
        </div>
      ))}
      </FlipMove>
    </div>
  );
}

export default CheckOut;
