import React, { Component } from "react";
import GamesList from "./GamesList";
import _ from "lodash";

const game = [
  {
    id: 1,
    featured: true,
    name: "Quadrapolis",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0934/2076/products/Blue_Summer2_1024x1024.jpg?v=1445982485",
    price: 3299,
    players: "2-4",
    duration: 60
  },
  {
    id: 2,
    featured: false,
    name: "aoll for the Galaxy",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0934/2076/products/Blue_Summer2_1024x1024.jpg?v=1445982485",
    price: 2999,
    players: "2-4",
    duration: 45
  }
];

class App extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: _.orderBy(game, ["featured", "name"], ["desc", "asc"])
    });
  }

  render() {
    return (
      <div className="ui container">
        <GamesList games={this.state.games} />
      </div>
    );
  }
}

// const game = undefined;

export default App;
