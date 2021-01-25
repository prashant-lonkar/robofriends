import React, { useState } from "react";
import "./App.css";
import SearchFriend from "./components/SearchFriend";
import CardContainer from "./components/CardContainer";
import Scroll from "./components/Scroll";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((user) => setFriends(user));
  return (
    <div>
      <h1 className="friends hvr-underline-from-center">Robofriends</h1>
      <SearchFriend searchTermChange={onSearchTermChange} />
      <Scroll>
        <CardContainer filteredFriends={filteredFriends} />
      </Scroll>
    </div>
  );
};

export default App;
