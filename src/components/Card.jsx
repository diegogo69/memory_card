import { useState } from "react";

function Card({ name, url, increaseScore, endGame }) {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    if (!isClicked) {
      setIsClicked(!isClicked);
      increaseScore();
    } else {
      endGame();
    }
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
