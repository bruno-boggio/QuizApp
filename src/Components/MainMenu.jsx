import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Helpers/Contexts";

const MainMenu = () => {
  const { gameState, setGameState, userName, setUserName } = useContext(GameStateContext);
  return (
    <div className="menu">
      <label>Digite seu nome</label>
      <input
        type="text"
        placeholder=""
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Iniciar Quiz
      </button>
    </div>
  );
}

export default MainMenu;