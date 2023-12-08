import React from "react";
import "./card.css";
import Card_img from '../../assest/R.jpg'
const card = () => {
  return (
    <div className="card_box">
        <img src={Card_img} alt="" />
        <h1>job</h1>
    </div>
  );
};

export default card;
