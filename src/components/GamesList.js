import React from "react";
import GameCard from "./GameCard";
import PropTypes from "prop-types";

const GamesList = ({ games }) => {
  return (
    <div className="ui four cards">
      {games.map(game => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      players: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GamesList;
