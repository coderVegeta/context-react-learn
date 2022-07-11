import React, { useContext } from "react";
import { myCart } from "./Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(myCart);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>{prod.price.substring(0, 3)}</span>
      </div>

      <button
        onClick={() => {
          setCart([...cart, prod]);
        }}
        className="add"
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          setCart(cart.filter((c) => c.id !== prod.id));
        }}
        className="add"
      >
        Remove from cart
      </button>
    </div>
  );
};

export default SingleProduct;
