import React from "react";

const Message = props => {
  return (
    <div className="ui icon message">
      <i className={`icon ${props.type}`} />
      <div className="content">
        <div className="header">{props.header}</div>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Message;
