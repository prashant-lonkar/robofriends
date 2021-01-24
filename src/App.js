import React, { useState } from "react";
import "./App.css";
import SearchHero from "./components/SearchHero";
import CardContainer from "./components/CardContainer";
import allHeroes from "./heroes";

const App = () => {
  const [heroes] = useState(allHeroes);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1 className="superhero hvr-underline-from-center">Superheroes</h1>
      <SearchHero searchTermChange={onSearchTermChange} />
      <CardContainer filteredHeroes={filteredHeroes} />
    </div>
  );
};

export default App;
