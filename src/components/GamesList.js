import React from "react";
import GameCard from "./GameCard";
import Message from "./Message";

import PropTypes from "prop-types";

const GamesList = ({ games, toggleFeature }) => {
  return (
    <div className="ui four cards">
      {games.length === 0 ? (
        <Message
          header="There are no games in your store"
          content="Please Add some Games"
          type="info"
        />
      ) : (
        games.map(game => (
          <GameCard game={game} key={game.id} toggleFeature={toggleFeature} />
        ))
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
