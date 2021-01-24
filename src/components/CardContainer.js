import React from "react";
import Card from "./Card";
import "../App.css";

const CardContainer = ({ filteredFriends }) => {
  return (
    <div className="card-container">
      {filteredFriends.length === 0 ? (
        <p className="no-data">No friend to display</p>
      ) : (
        filteredFriends.map((friend) => (
          <Card key={friend.id} name={friend.name} username={friend.username} />
        ))
      )}
    </div>
  );
};
export default CardContainer;
