import React, { Component } from "react";
import _ from "lodash";
// import axios from "axios";
// import _ from "lodash";

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
    selectedGame: {},
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      api.games
        .fetchAll()
        .then(games =>
          this.setState({ games: this.sortBy(games), loading: false })
        );
    }, 3000);
  }

  sortBy = game => {
    return _.orderBy(game, ["featured", "name"], ["desc", "asc"]);
  };

  toggleFeature = gameId => {
    const game = _.find(this.state.games, { _id: gameId });
    // console.log(game);
    return this.updateGame({
      ...game,
      featured: !game.featured
    });
  };

  //   const newGames = this.state.games.map(game => {
  //     if (game.id === gameId) return { ...game, featured: !game.featured };
  //     return game;
  //   });

  //   this.setState({ games: this.sortBy(newGames) });

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

  updateGame = gameData =>
    api.games.update(gameData).then(game =>
      this.setState({
        games: this.sortBy(
          this.state.games.map(item => (item._id === game._id ? game : item))
        ),
        showGameForm: false
      })
    );
  // this.setState({
  //   games: this.sortBy(
  //     this.state.games.map(item => (item.id === game.id ? game : item))
  //   ),
  //   showGameForm: false
  // });

  deleteGame = game =>
    api.games.delete(game).then(() =>
      this.setState({
        games: this.state.games.filter(item => item._id !== game._id)
      })
    );
  // this.setState({
  //   games: this.state.games.filter(item => item.id !== game.id)
  // });

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
            {this.state.loading ? (
              <div className="ui icon message">
                <i className="notched circle loading icon" />
                <div className="content">
                  <div className="header">Wait a second</div>
                  <p>Loading... games collection</p>
                </div>
              </div>
            ) : (
              <GamesList
                games={this.state.games}
                toggleFeature={this.toggleFeature}
                editGame={this.selectGameForEditing}
                deleteGame={this.deleteGame}
              />
            )}
          </div>
        </div>

        <br />
      </div>
    );
  }
}

// const game = undefined;

export default App;
