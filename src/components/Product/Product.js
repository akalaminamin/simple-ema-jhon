import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
import Rating from "react-rating";

function Product({ singleProduct, handleAddtoCart }) {
  const { img, name, price, stock, seller, star } = singleProduct;
  const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <>
      <div className="product-wrapper">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="product-content">
          <h4>{name}</h4>
          <p>by: {seller}</p>
          <p>{price}</p>
          <Rating
            initialRating={star}
            readonly
            fullSymbol="fas fa-star"
            emptySymbol="far fa-star"
          />
          <br />
          <p>
            only <span>{stock}</span> left in stock - order soon
          </p>
          <button
            className="btn add-btn"
            onClick={() => handleAddtoCart(singleProduct)}
          >
            {shoppingCart} Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
