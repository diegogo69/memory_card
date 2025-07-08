const ScoreBoard = ({ currentScore, bestScore }) => (
  <div className="scoreboard">
    <span>Score: {currentScore}</span>
    <span>Best: {bestScore}</span>
  </div>
);

export default ScoreBoard;
