import React from "react";
import "../SearchHero.css";

const SearchHero = ({ searchTermChange }) => (
  <input
    type="search"
    placeholder="Search your hero..."
    onChange={searchTermChange}
  />
);

export default SearchHero;
