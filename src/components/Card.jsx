import { useState } from "react";

function Card({ name, url }) {
  // const [isClicked, setIsClicked] = useState(false);
  console.log(name + ' ' + url)

  // const clickHandler = () => {
  //   if (!isClicked) {
  //     setIsClicked(!isClicked);
  //   } else {
  //     // Clicked twice
  //     setGameOver(true);
  //   }
  // };

  console.log(url);

  return (
    <div>
      <div className="card-title">{name}</div>
      <div className="card-img">
        {url}
      </div>
    </div>
  );
}

export default Card;
