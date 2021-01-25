import React from "react";
import Card from "./Card";

const CardContainer = ({ filteredFriends }) => {
  return (
    <div className="card-container">
      {!filteredFriends.length ? (
        <p className="no-data">No friend to display</p>
      ) : (
          // destructuring each element in filteredFriends
        filteredFriends.map(({id, name, username}) => (
          <Card key={id} name={name} username={username} />
        ))
      )}
    </div>
  );
};
export default CardContainer;
