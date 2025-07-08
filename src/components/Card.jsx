import { useEffect, useState } from "react";
import { getData } from "../utils";

function Card({ name, url, increaseScore, endGame, clickCard }) {
  const [imgsrc, setImgsrc] = useState("");

  const clickHandler = () => {
    clickCard(name);
  };

  console.log(url);

  useEffect(() => {
    const fetchImg = async () => {
      const pokeData = await getData(url);
      const pokeSprites = pokeData.sprites;
      const pokeImg = pokeSprites.other.dream_world.front_default;
      console.log(pokeSprites);
      setImgsrc(pokeImg)
    };
    fetchImg();
  }, []);

  return (
    <div onClick={clickHandler}>
      <div className="card-title">{name}</div>
      <div className="card-img">
        <img src={imgsrc} alt={name} />
      </div>
    </div>
  );
}

export default Card;
