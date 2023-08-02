import React from "react";
import { product } from "../../assests/data/data";
import "./product.css";
import ProductCart from './ProductCart';



function Product() {
  return (
    <>
      <section className='product'>
        <div className='container grid3'>
          {product.map((item) => (
            <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Product;
