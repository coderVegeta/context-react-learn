import React, { useState } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";
import "./style.css";

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  //console.log(productsArray);
  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} /> //why cant we directly pass props via component wihtout using map method?
      ))}
    </div>
  );
};

export default Home;
