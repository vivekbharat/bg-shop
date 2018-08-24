import React from "react";
import PropTypes from "prop-types";

const Featured = ({ featured }) => {
  return (
    <span>
      {featured ? (
        <a className="ui right yellow corner label">
          <i className="star icon" />
        </a>
      ) : (
        <a className="ui right corner label">
          <i className="empty star icon" />
        </a>
      )}
    </span>
  );
};

Featured.propTypes = {
  featured: PropTypes.bool.isRequired
};

export default Featured;
