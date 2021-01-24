import React, { useState } from "react";
import "./App.css";
import SearchFriend from "./components/SearchFriend";
import CardContainer from "./components/CardContainer";
import AllFriends from "./friends";

const App = () => {
  const [friends] = useState(AllFriends);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1 className="friends hvr-underline-from-center">Robofriends</h1>
      <SearchFriend searchTermChange={onSearchTermChange} />
      <CardContainer filteredFriends={filteredFriends} />
    </div>
  );
};

export default App;
