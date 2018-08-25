import React, { Component } from "react";
import _ from "lodash";

import GamesList from "./GamesList";
import GameForm from "./GameForm";
import TopNavigation from "./TopNavigation";

const publishers = [
  { id: 1, name: "Vivek" },
  { id: 2, name: "Bharathwaj" },
  { id: 3, name: "Ravikumar" }
];

const game = [
  {
    id: 1,
    publisher: 1,
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
    publisher: 2,
    featured: false,
    name: "Roll for the Galaxy",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0934/2076/products/Blue_Summer2_1024x1024.jpg?v=1445982485",
    price: 2999,
    players: "2-4",
    duration: 45
  },
  {
    id: 3,
    publisher: 3,
    featured: false,
    name: "Five Tribe",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0934/2076/products/Blue_Summer2_1024x1024.jpg?v=1445982485",
    price: 1599,
    players: "2-6",
    duration: 120
  }
];

class App extends Component {
  state = {
    games: [],
    showGameForm: false
  };

  componentDidMount() {
    this.setState({
      games: this.sortBy(game)
    });
  }

  sortBy = game => {
    return _.orderBy(game, ["featured", "name"], ["desc", "asc"]);
  };

  toggleFeature = gameId => {
    const newGames = this.state.games.map(game => {
      if (game.id === gameId) return { ...game, featured: !game.featured };
      return game;
    });

    this.setState({ games: this.sortBy(newGames) });
  };

  showGameForm = () =>
    this.setState({ showGameForm: !this.state.showGameForm });

  render() {
    const numberOfColumns = this.state.showGameForm ? "ten" : "sixteen";
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.showGameForm} />
        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm
                publishers={publishers}
                showGameForm={this.showGameForm}
              />
            </div>
          )}
          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              toggleFeature={this.toggleFeature}
            />
          </div>
        </div>

        <br />
      </div>
    );
  }
}

// const game = undefined;

export default App;
