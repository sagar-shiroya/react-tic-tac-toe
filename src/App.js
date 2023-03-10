import "./App.css";
import { Footer } from "./Footer";
import { Board } from "./Board";

function App() {
  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <Board />
      <Footer />
    </div>
  );
}

export default App;
