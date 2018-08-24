import React from "react";
import PropTypes from "prop-types";

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

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default GameCard;
