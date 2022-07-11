import { createContext, useState } from "react";

export const myCart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <myCart.Provider value={{ cart, setCart }}>{children}</myCart.Provider>
  );
};

export default Context;
