import { useEffect, useState } from "react";
import Card from "./Card";

function CardGrid({ pokeList, increaseScore, endGame }) {
  return (
    <div>
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
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
