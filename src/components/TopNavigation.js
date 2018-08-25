import React from "react";
import PropTypes from "prop-types";

const TopNavigation = ({ showGameForm }) => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <a href="/" className="item">
          BG SHOP
        </a>
        <a className="item" onClick={showGameForm}>
          <i className="icon plus" />
          Add New Game
        </a>{" "}
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  showGameForm: PropTypes.func.isRequired
};

export default TopNavigation;
