import React from "react";

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">${game.price}</span>
      <img src={game.thumbnail} alt="Game Cover" />
    </div>
    <div className="content">
      <a href="" className="header">
        {game.name}
      </a>
      <div className="meta">
        <i className="icon users" />
        {game.players} {""}
        <i className="icon wait" />
        {game.duration}
      </div>
    </div>
  </div>
);

export default GameCard;
