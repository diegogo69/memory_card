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

  const title = name ? name[0].toUpperCase() + name.slice(1) : "";

  return (
    <div className="card" onClick={clickHandler}>
      <h2 className="card-title">{title}</h2>
      <div className="card-img">
        {imgsrc && <img src={imgsrc} alt={title} />}
      </div>
    </div>
  );
}

export default Card;
