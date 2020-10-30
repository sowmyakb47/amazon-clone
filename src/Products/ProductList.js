import React from "react";
import Product from "../Products/Product";

function ProductList() {
  return (
    <div>
      <div className="home_product">
        <Product
        id="1"
          image="https://m.media-amazon.com/images/I/71JHDQfKgUL._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White"
          price="34.99"
          rating={4}
        />
        <Product
        id="2"
          image="https://m.media-amazon.com/images/I/A166C71eR-L._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics Slim Carry On Travel Backpack"
          price="20.71"
          rating={3}
        />
        <Product
        id="3"
          image="https://m.media-amazon.com/images/I/51YrJCDKWWL._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics Dehumidifier - For Areas Up to 2,500 Square Feet, 35-Pint, Energy Star Certified"
          price="328"
          rating={2}
        />
      </div>
      <div className="home_product">
        <Product
        id="4"
          image="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY327_FMwebp_QL65_.jpg"
          title="Apple AirPods with Charging Case (Wired)"
          price="96.75"
          rating={3}
        />
        <Product
        id="5"
          image="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
          price="76.49"
          rating={5}
        />
      </div>
      <div className="home_product">
        <Product
        id="6"
          image="https://m.media-amazon.com/images/I/61l5lVfOhUL._AC_UY327_FMwebp_QL65_.jpg"
          title="Mpow CH8 Kids Headphones with Microphone (2-Pack), Wired On-Ear Headsets with Safe Volume Limited 91dB, Foldable Durable Earphones w/Audio Splitter for Boys/Girls/Toddlers/Children/School/Travel/Plane"
          price="328"
          rating={3}
        />
        <Product
        id="7"
          image="https://m.media-amazon.com/images/I/81GF26UFdeL._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics Classic Solid Wood Saddle-Seat Kitchen Counter Stool with Foot Plate 29 Inch, Walnut, Set of 2"
          price="64.99"
          rating={1}
        />
        <Product
        id="8"
          image="https://m.media-amazon.com/images/I/71H8btY1jlL._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics 3.2 Quart Compact Multi-Functional Air Fryer"
          price="57.71"
          rating={2}
        />
      </div>
      <div className="home_product">
        <Product
        id="9"
          image="https://m.media-amazon.com/images/I/71qDCKkNA3L._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics 9-Inch Thermal Laminator Machine"
          price="24.99"
          rating={3}
        />
        <Product
        id="10"
          image="https://m.media-amazon.com/images/I/61l1BXNnl+L._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics Grip Kit for Nintendo Switch Joy-Con Controllers - Red"
          price="14.50"
          rating={4}
        />
        <Product
          id="11"
          image="https://m.media-amazon.com/images/I/81PsUdnkICL._AC_UL480_FMwebp_QL65_.jpg"
          title="AmazonBasics Memory Foam Filled Bean Bag Chair with Microfiber Cover - 3', Gray"
          price="20.71"
          rating={4}
        />
      </div>
    </div>
  );
}

export default ProductList;
