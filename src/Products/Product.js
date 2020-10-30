import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Product.css";
import Noty from 'noty'
import '../../node_modules/noty/lib/noty.css'
import "../../node_modules/noty/lib/themes/mint.css";  
import StarIcon from '@material-ui/icons/Star';



function Product({title, price, image, rating,id }) {

  const [{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
    //notification on adding item to cart

    new Noty({
      type:"success",
      layout:"topRight",
      text:`<div class="noty__container"><img src=${image}> ${title} has been added to basket</div>`,
      closeWith:["button"]
  }).show();

    //dispatch
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:parseFloat(price),
        rating:rating,
      }
    })
  }
  return (
    <div className="product">
      <div>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            <p>
            {Array(rating).fill().map((_,i) => (
                <StarIcon key={i}/>  
            ))}
            </p> 
          </div>
        </div>
        <div className="img_btn">
          <img src={image} className="product_image" alt="" />
          <button className="product_button" style={{ textAlign: "left" }} onClick={addToBasket}>
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
