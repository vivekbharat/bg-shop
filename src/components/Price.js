import React from "react";

const Price = ({ cents }) => {
  return (
    <span className="ui green ribbon label">
      ${cents / 100} {cents < 3000 && "!"}
    </span>
  );
};

export default Price;
