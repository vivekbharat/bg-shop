import React from "react";
import PropTypes from "prop-types";
import Price from "./Price";
// import GamesList from "./GamesList";

import Featured from "./Featured";

class GameCard extends React.Component {
  state = {
    showConfirmation: false
  };

  showConfirmation = () => this.setState({ showConfirmation: true });
  hideConfirmation = () => this.setState({ showConfirmation: false });

  render() {
    const { game, toggleFeature, editGame, deleteGame } = this.props;
    return (
      <div className="ui card">
        <div className="image">
          <Price cents={game.price} />
          <Featured
            featured={game.featured}
            toggleFeature={toggleFeature}
            gameId={game._id}
          />
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
        <div className="extra content">
          {this.state.showConfirmation ? (
            <div className="ui two buttons">
              <a
                className="ui red basic button"
                onClick={() => deleteGame(game)}
              >
                <i className="ui icon check" /> YES
              </a>
              <a
                className="ui grey basic  button"
                onClick={this.hideConfirmation}
              >
                <i className="ui icon close" /> NO
              </a>
            </div>
          ) : (
            <div className="ui two buttons">
              <a
                className="ui green basic button"
                onClick={() => editGame(game)}
              >
                <i className="ui icon edit" />
              </a>
              <a
                className="ui red basic  button"
                onClick={this.showConfirmation}
              >
                <i className="ui icon trash" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  editGame: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default GameCard;
