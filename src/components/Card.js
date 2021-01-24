import React from "react";
import "hover.css/css/hover.css";

const Card = ({ name, info }) => {
  return (
    <div className="card hvr-hang hvr-shadow">
      <img
        src={`https://robohash.org/${name}`}
        alt="robot-faces"
        width="150"
        height="100"
      />
      <div>
        <h2 className="title">{name}</h2>
        <p className="info">{info}</p>
        <button className="hvr-bounce-to-right">Know More</button>
      </div>
    </div>
  );
};

export default Card;
