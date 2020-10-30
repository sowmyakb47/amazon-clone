import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './BasketItem.css'

function BasketItem({title, price, image, rating,id }) {
    const [{basket},dispatch]=useStateValue();
   const removeFromBasket=(basket)=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })

    }
    return (
        <div className="basketitem">
           <img src={image} className="basketitem_image"/>
           <div className="basketitem_info">
           <p className="basketitem_title">{title}</p>
           <p className="basketitem__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <p>{rating}</p>
            <button className="basketitem_button" onClick={removeFromBasket}>Remove from Basket</button>
           </div>
        </div>
    )
}

export default BasketItem
