import React, { Component } from "react";
import _ from "lodash";
// import axios from "axios";

import GamesList from "./GamesList";
import GameForm from "./GameForm";
import TopNavigation from "./TopNavigation";
import api from "../api";

const publishers = [
  { id: "1", name: "Vivek" },
  { id: "2", name: "Bharathwaj" },
  { id: "3", name: "Ravikumar" }
];

class App extends Component {
  state = {
    games: [],
    showGameForm: false,
    selectedGame: {}
  };

  componentDidMount() {
    api.games
      .fetchAll()
      .then(games => this.setState({ games: this.sortBy(games) }));
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

  showGameForm = () => {
    if (this.state.showGameForm) {
      this.setState({
        showGameForm: !this.state.showGameForm,
        selectedGame: {}
      });
    } else {
      this.setState({ showGameForm: true, selectedGame: {} });
    }
  };
  saveGame = game => (game.id ? this.updateGame(game) : this.addGame(game));

  addGame = gameData =>
    api.games.create(gameData).then(game =>
      this.setState({
        games: this.sortBy([...this.state.games, game]),
        showGameForm: false
      })
    );
  // this.setState({
  //   games: this.sortBy([
  //     ...this.state.games,
  //     {
  //       ...data,
  //       id: this.state.games.length + 1
  //     }
  //   ]),
  //   showGameForm: false
  // });

  updateGame = game =>
    this.setState({
      games: this.sortBy(
        this.state.games.map(item => (item.id === game.id ? game : item))
      ),
      showGameForm: false
    });

  deleteGame = game =>
    this.setState({
      games: this.state.games.filter(item => item.id !== game.id)
    });

  selectGameForEditing = game =>
    this.setState({ selectedGame: game, showGameForm: true });

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
                submit={this.saveGame}
                game={this.state.selectedGame}
              />
            </div>
          )}
          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              toggleFeature={this.toggleFeature}
              editGame={this.selectGameForEditing}
              deleteGame={this.deleteGame}
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
