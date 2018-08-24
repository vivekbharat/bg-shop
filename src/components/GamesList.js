import React from "react";
import GameCard from "./GameCard";
import PropTypes from "prop-types";

const GamesList = ({ games }) => {
  return (
    <div className="ui four cards">
      {games.length === 0 ? (
        <div className="ui icon message">
          <i className="icon info" />
          <div className="content">
            <div className="header">There are no games in your store</div>
            <p>Please Add some </p>
          </div>
        </div>
      ) : (
        games.map(game => <GameCard game={game} key={game.id} />)
      )}
    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape).isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
