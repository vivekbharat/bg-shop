import React, { Component } from "react";

class GameForm extends Component {
  state = {
    name: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log({ title: this.state.name });
  };

  onChange = e => {
    this.setState({ name: e.target.value });
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
              placeholder="Full Game Title"
              // ref={input => (this.name = input)}
              value={this.state.name}
              onChange={this.onChange}
            />
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
