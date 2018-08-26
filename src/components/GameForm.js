import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactImageFallback from "react-image-fallback";
// const tags = [
//   { id: 1, name: "dice" },
//   { id: 2, name: "economic" },
//   { id: 3, name: "family" }
// ];

// const genres = [
//   { id: 1, name: "abstract" },
//   { id: 2, name: "action" },
//   { id: 3, name: "euro" }
// ];

class GameForm extends Component {
  state = {
    data: {
      name: "",
      description: "",
      price: 0,
      duration: 0,
      players: "",
      featured: true,
      // tags: [],
      // genre: 1,
      publisher: 0,
      thumbnail: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]:
          e.target.type === "number"
            ? parseInt(e.target.value, 10)
            : e.target.value
      }
    });
  };

  onCheckBoxChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked }
    });
  };

  // handleGenreChange = genre => this.setState({ genre: genre.id });

  // onToggleTags = tag =>
  //   this.state.tags.includes(tag.id)
  //     ? this.setState({ tags: this.state.tags.filter(id => id !== tag.id) })
  //     : this.setState({ tags: [...this.state.tags, tag.id] });

  render() {
    const { data } = this.state;
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui grid">
            <div className="twelve wide column">
              <div className="field">
                <label htmlFor="name">Game Title</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Game Title"
                  // ref={input => (this.name = input)}
                  value={data.name}
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
                  value={data.description}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="four wide column">
              {/* {data.thumbnail ? (
                <img
                  src={data.thumbnail}
                  alt="Thumbnail"
                  className="ui image"
                />
              ) : (
                <img
                  src="http://via.placeholder.com/250x250"
                  alt="Thumbnail"
                  className="ui image"
                />
              )} */}
              <ReactImageFallback
                src={data.thumbnail}
                fallbackImage="http://via.placeholder.com/250x250"
                alt="Thumbnail"
                className="ui image"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="thumbnail">Image URl</label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              placeholder="Imag URl"
              // ref={input => (this.name = input)}
              value={data.name}
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
                value={data.price}
                onChange={this.onChange}
              />
            </div>

            <div className="field">
              <label htmlFor="duration">Game Duration(in mins)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={data.duration}
                onChange={this.onChange}
              />
            </div>

            <div className="field">
              <label htmlFor="players">Game Players</label>
              <input
                type="text"
                id="players"
                name="players"
                value={data.players}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="inline field">
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={data.featured}
              onChange={this.onCheckBoxChange}
            />
            <label htmlFor="featured">Featured</label>
          </div>

          {/* <div className="field">
            <label>Tags</label>
            {tags.map(tag => (
              <div key={tag.id} className="inline field">
                <input
                  id={`tag={tag.id}`}
                  type="checkbox"
                  checked={data.tags.includes(tag.id)}
                  onChange={() => this.onToggleTags(tag)}
                />
                <label htmlFor={`tag-${tag.id}`}>{tag.name}</label>
              </div>
            ))}
          </div>

          <div className="field">
            <label>Genre</label>
            {genres.map(genre => (
              <div key={genre.id} className="inline field">
                <input
                  type="radio"
                  id={`genre-${genre.id}`}
                  checked={data.genre === genre.id}
                  onChange={() => this.handleGenreChange(genre)}
                />
                <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
              </div>
            ))}
          </div> */}

          <div className="field">
            <label htmlFor="">Publisher</label>
            <select
              name="publisher"
              value={data.publisher}
              onChange={this.onChange}
              id=""
            >
              <option value="0">Choose Publisher</option>
              {this.props.publishers.map(publisher => (
                <option value={publisher.id} key={publisher.id}>
                  {publisher.name}
                </option>
              ))}
            </select>
          </div>

          <div className="ui fluid buttons">
            <button className="ui primary button" type="submit">
              Create
            </button>
            <div className="or" />
            <a className="ui button" onClick={this.props.showGameForm}>
              Cancel>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  showGameForm: PropTypes.func.isRequired
};

GameForm.defaultProps = {
  publishers: []
};

export default GameForm;
