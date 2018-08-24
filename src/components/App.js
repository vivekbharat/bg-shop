import React from "react";
import GamesList from "./GamesList";

const App = () => {
  // const game = undefined;
  const game = [
    {
      id: 1,
      name: "Quadrapolis",
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0934/2076/products/Blue_Summer2_1024x1024.jpg?v=1445982485",
      price: 3299,
      players: "2-4",
      duration: 60
    },
    {
      id: 2,
      name: "Roll for the Galaxy",
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0934/2076/products/Blue_Summer2_1024x1024.jpg?v=1445982485",
      price: 2999,
      players: "2-4",
      duration: 45
    }
  ];

  return (
    <div className="ui container">
      <GamesList games={game} />
    </div>
  );
};

export default App;
