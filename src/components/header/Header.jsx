import React from "react";
import Medicine from "../../assests/images/Medicine.svg";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";

import { Link } from "react-router-dom";
import Card from './Card';
import User from './User';

export const Header = () => {
  window.addEventListener("scroll", function(){
    const header = this.document.querySelector(".header")
  })
  window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})
  return (
    <>
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <Link to="/">
          <img src={Medicine} alt="medicine-image" />
          </Link>
        </div> 
        <div className="flex search">
          <AiOutlineSearch className="searchIcon" />
          <input type="text" placeholder="Search ..." />
        </div>
        <div className="account flexCenter">
          <Card />
          <User />
        </div>
      </div>
    </header>
    </>
  );
};
