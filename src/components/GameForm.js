import React, { Component } from "react";

class GameForm extends Component {
  state = {
    name: "",
    description: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log({ title: this.state });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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

          <button className="ui button" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default GameForm;
