import { useState, useEffect } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import { getPokeList, shuffleArray } from "./utils";

function App() {
  // Set gameover
  // set score
  // set highScore
  const [gameover, setGameover] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // limit: no pokes
  // offset: prev no pokes
  const [pokeNo, setPokeNo] = useState(6);
  const [pokeOffset, setPokeOffset] = useState(0);
  const [pokeList, setPokeList] = useState([{ name: "" }]);

  // If score == pokes
  // Increase no pokes
  // Update offset
  // Query new list of pokes

  // Set number of pokes
  // Set array of pokes

  // Query list of pokes, offset: previous number of pokes. limit: numer of pokes

  // Shuffle array (between re-renders?)

  // Render card items: name as key, name, and url to query sprite

  useEffect(() => {
    const setpoke = async () => {
      const pokes = await getPokeList(pokeNo, pokeOffset);
      setPokeList(pokes);
    };
    setpoke();
  }, []);

  // useEffect(() => {
  //   setPokeList(shuffleArray(pokeList));
  // }, [score]);

  // If gameover
  // Disable handlers
  // Display dialog?

  const increaseScore = () => {
    setScore(score + 1)
  }

  const endGame = () => {
      setGameover(true);
      alert('Game over')
  }

  const props = {
    gameover,
    setGameover,
    endGame,
    score,
    setScore,
    increaseScore,
    bestScore,
    setBestScore,
    pokeNo,
    setPokeNo,
    pokeOffset,
    setPokeOffset,
    pokeList,
    setPokeList,
  };

  return (
    <div>
      <div>Score: {score}</div>
      <CardGrid {...props} />
    </div>
  );
}

export default App;
