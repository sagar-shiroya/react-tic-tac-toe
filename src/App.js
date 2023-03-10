import "./App.css";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="container">
      <h1>Tic-Tac-Toe Game</h1>
      <Board />
      <Footer />
    </div>
  );
}

const Board = () => {
  return (
    <>
      <div className="board-row">
        <button className="square"> 1</button>
        <button className="square"> 2</button>
        <button className="square"> 3</button>
      </div>
      <div className="board-row">
        <button className="square"> 4</button>
        <button className="square"> 5</button>
        <button className="square"> 6</button>
      </div>
      <div className="board-row">
        <button className="square"> 7</button>
        <button className="square"> 8</button>
        <button className="square"> 9</button>
      </div>
    </>
  );
};

export default App;
