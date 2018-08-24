import React from "react";
import GameCard from "./GameCard";

const GamesList = ({ games }) => {
  return (
    <div className="ui four cards">
      {games.map(game => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
};

export default GamesList;
