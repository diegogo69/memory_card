import { useState, useEffect } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import { getPokeList, shuffleArray } from "./utils";

const INITIAL_POKE_NO = 6;
const INITIAL_POKE_OFFSET = 0;

function App() {
  // Set gameover
  // set score
  // set highScore
  const [gameover, setGameover] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // limit: no pokes
  // offset: prev no pokes
  const [pokeNo, setPokeNo] = useState(INITIAL_POKE_NO);
  const [pokeOffset, setPokeOffset] = useState(INITIAL_POKE_OFFSET);
  const [pokeList, setPokeList] = useState([{ name: "" }]);
  const [clickedCards, setClickedCards] = useState([]);

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
      console.log('fetching pokes')
      const pokes = await getPokeList(pokeNo, pokeOffset);
      setPokeList(pokes);
    };
    setpoke();
  }, [pokeNo]);

  // Shuffle array on each score
  // useEffect(() => {
  //   setPokeList(shuffleArray(pokeList));
  // }, [score]);

  // If gameover
  // Disable handlers
  // Display dialog?

  const increaseScore = () => {
    const newScore = score + 1;
    const roundScore = newScore - pokeOffset;

    if (roundScore === pokeList.length) {
      setPokeOffset(newScore);
      setPokeNo(pokeNo + 2);
    }
    
    setScore(newScore);
  };

  const endGame = () => {
    setGameover(true);
    setScore(0);
    setClickedCards([])
    setPokeNo(INITIAL_POKE_NO)
    setPokeOffset(INITIAL_POKE_OFFSET)

    if (score > bestScore) {
      setBestScore(score);
    }

    alert("Game over");
  };

  const clickCard = (name) => {
    if (clickedCards.includes(name)) {
      endGame();
    } else {
      setClickedCards([...clickedCards, name])
      increaseScore()
    }
  };

  const props = {
    clickCard,
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
    <>
      <header>
        <h1>Memory Card</h1>
        <div className="score-board">
          <div className='score'><strong>Score</strong>: {score}</div>
          <div className='best-score'><strong>Best score</strong>: {bestScore}</div>
        </div>
      </header>
      <main>
        <CardGrid {...props} />
      </main>
    </>
  );
}

export default App;
