import React from "react";
import { order } from "../../assests/data/data";
import "./slider.css";

function Order() {
  return (
    <>
      <section className='order'>
        <div className='container grid boxItems'>
          {order.map((item) => (
            <div className='box flexCenter' key={item.id}>
              <div className='num'>
                <h1>{item.id}</h1>
              </div>
              <div className='text'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Order;
