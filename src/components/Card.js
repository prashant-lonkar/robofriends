import React from "react";
import "../App.css";
import "hover.css/css/hover.css";

const Card = ({ name, username }) => {
  return (
    <div className="card hvr-hang">
      <img src={`https://robohash.org/${name}`} alt="robot-faces" />
      <div>
        <h2 className="name">{name}</h2>
        <p className="username">{username}</p>
        <button className="hvr-bounce-to-right">Know More</button>
      </div>
    </div>
  );
};

export default Card;
