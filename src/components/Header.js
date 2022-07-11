import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myCart } from "./Context";
import "./style.css";

const Header = () => {
  const { cart } = useContext(myCart);
  return (
    <div>
      <span className="header">React Context API tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
