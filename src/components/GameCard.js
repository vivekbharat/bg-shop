import React from "react";

const GameCard = () => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">$32.99</span>
      <img
        src="https://cdn.shopify.com/s/files/1/0934/2076/products/Blue_Summer2_1024x1024.jpg?v=1445982485"
        alt="Game Cover"
      />
    </div>
    <div className="content">
      <a href="" className="header">
        Quadropolis
      </a>
      <div className="meta">
        <i className="icon users" />
        2-4 {""}
        <i className="icon wait" />
        60 min
      </div>
    </div>
  </div>
);

export default GameCard;
