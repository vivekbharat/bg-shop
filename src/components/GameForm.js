import React, { Component } from "react";

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log({ title: this.state });
  };

  onChange = e => {
    this.setState({
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value, 10)
          : e.target.value
    });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Game Title</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Game Title"
              // ref={input => (this.name = input)}
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>

          <div className="field">
            <label htmlFor="description">Game Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="Full Game Description"
              // ref={input => (this.description = input)}
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="three fields">
            <div className="field">
              <label htmlFor="price">Game Price(in cents)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>

            <div className="field">
              <label htmlFor="duration">Game Duration(in mins)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={this.state.duration}
                onChange={this.onChange}
              />
            </div>

            <div className="field">
              <label htmlFor="players">Game Players</label>
              <input
                type="text"
                id="players"
                name="players"
                value={this.state.players}
                onChange={this.onChange}
              />
            </div>
          </div>

          <button className="ui button" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default GameForm;
