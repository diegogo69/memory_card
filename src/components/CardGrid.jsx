import { use, useEffect, useState } from "react";
import Card from "./Card";

function CardGrid({pokeList}) {
  // limit: no pokes
  // offset: prev no pokes

  // If score == pokes
  // Increase no pokes
  // Update offset
  // Query new list of pokes

  // Set number of pokes
  // Set array of pokes

  // Query list of pokes, offset: previous number of pokes. limit: numer of pokes

  // Declare shuffle function

  // Shuffle array (between re-renders?)

  // Render card items: name as key, name, and url to query sprite

  return (
    <div>
      {pokeList.map((poke) => {
        console.log(poke)
        const { name, url } = poke;
        return <Card key={name} name={name} url={url} />;
      })}
    </div>
  );
}

export default CardGrid;
