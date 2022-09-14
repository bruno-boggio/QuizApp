import React, {useContext} from 'react'
import { Questions } from '../Helpers/Questions'
import { GameStateContext } from '../Helpers/Contexts';

const EndGame = () => {
    
    const { score, setScore, setGameState, userName } = useContext(GameStateContext);
    
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
      };

  return (
    <div className='EndScreen'>   
      <h1 className='endquiz'>Quiz Finalizado</h1>
      <h3 className='name'>{userName}</h3> acertou :
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
  )
}

export default EndGame