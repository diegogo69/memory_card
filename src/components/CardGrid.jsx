import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/CardGrid.css'

function CardGrid({ pokeList, increaseScore, endGame, clickCard }) {
  return (
    <div className="card-grid">
      {pokeList.map((poke) => {
        console.log(poke);
        const { name, url } = poke;
        return (
          <Card
            key={name}
            name={name}
            url={url}
            increaseScore={increaseScore}
            endGame={endGame}
            clickCard={clickCard}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
