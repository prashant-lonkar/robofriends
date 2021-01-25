import React from "react";

const SearchFriend = ({ searchTermChange }) => (
  <input
    className="searchbar"
    type="search"
    placeholder="Search your friend..."
    onChange={searchTermChange}
  />
);

export default SearchFriend;
