import React from "react";
import "../SearchHero.css";

const SearchHero = ({ searchTermChange }) => (
  <input
    className="searchbar"
    type="search"
    placeholder="Search your hero..."
    onChange={searchTermChange}
  />
);

export default SearchHero;
