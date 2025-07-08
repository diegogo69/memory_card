import { useState, useEffect } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import { getPokeList } from "./utils";


function App() {
  // Set gameover
  // set score
  // set highScore
  const [gameover, setGameover] = useState(false)
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [pokeNo, setPokeNo] = useState(6);
  const [pokeOffset, setPokeOffset] = useState(0);
  const [pokeList, setPokeList] = useState([{name: ''}]);

  useEffect(() => {
    const setpoke = async () => {
      const pokes = await getPokeList(pokeNo, pokeOffset);
      console.log(pokes)
      setPokeList(pokes);
    };
    setpoke();
  }, []);

  // If gameover
  // Disable handlers
  // Display dialog?

  return (
    <div>
      <CardGrid pokeList={pokeList} />
    </div>
  )
}

export default App;
