import { useState } from "react";

function Card({ name, url, increaseScore, endGame, clickCard }) {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    clickCard(name);
  };

  console.log(url);

  return (
    <div onClick={clickHandler}>
      <div className="card-title">{name}</div>
      <div className="card-img">
        {url}
      </div>
    </div>
  );
}

export default Card;
