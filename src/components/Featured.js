import React from "react";
import PropTypes from "prop-types";

const Featured = ({ featured, toggleFeature, gameId }) => {
  return (
    <span>
      {featured ? (
        <a
          onClick={() => toggleFeature(gameId)}
          className="ui right corner yellow label"
        >
          <i className="star icon" />
        </a>
      ) : (
        <a
          onClick={() => toggleFeature(gameId)}
          className="ui right corner label"
        >
          <i className="empty star icon" />
        </a>
      )}
    </span>
  );
};

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeature: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired
};

export default Featured;
