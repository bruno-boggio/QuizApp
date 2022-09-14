import React, {useState} from 'react';
import './App.css';
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndGame from './Components/EndGame'
import { GameStateContext } from './Helpers/Contexts'

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);


  return (

    <div className="container">
      <h1 className='title'>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "EndScreen" && <EndGame />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
