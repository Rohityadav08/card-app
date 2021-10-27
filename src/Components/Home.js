import React from 'react';
import addToCartHandler from "../Containers/HomeContainer";
import "./style.css";
const Home = (props)=>{
  // console.warn("Home",props.cartData);
    return (
      <>
        <div className="cart-wrapper">
          <div className="img-wrapper item  tooltip">
            <img src={props.path} alt="Image can't loaded" />
            <span class="tooltiptext">Mobile Images</span>
          </div>
          <div className="text-wrapper item">
            <h4>Brand:{props.brand}</h4>
            <h5>Model:{props.model}</h5>
            <div>Price:INR {props.price}</div>
          </div>
          <div className="btn-wrapper item">
            <button
              onClick={() =>
                addToCartHandler({
                  brand: props.brand,
                  model: props.model,
                  price: props.price,
                  path: props.path,
                })
              }
            >
              Add To Cart
            </button>
            <button onClick={() => props.removeToCartHandler()}>
              Remove To Cart
            </button>
          </div>
        </div>
      </>
    );
}

export default Home;