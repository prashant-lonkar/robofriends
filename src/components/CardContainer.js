import React from "react";
import Card from "./Card";
import "../App.css";

const CardContainer = ({ filteredHeroes }) => {
  return (
    <div className="card-container">
      {filteredHeroes.length === 0 ? (
        <p className="no-data">No hero to display</p>
      ) : (
        filteredHeroes.map((hero) => (
          <Card key={hero.id} name={hero.name} info={hero.info} />
        ))
      )}
    </div>
  );
};
export default CardContainer;
