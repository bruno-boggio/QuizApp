import React, {useState, useContext} from 'react'
import { GameStateContext } from '../Helpers/Contexts'
import {Questions} from '../Helpers/Questions'
  


const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    
  const { score, setScore, gameState, setGameState } = useContext(GameStateContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer  === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("EndScreen");
  };

  return (
    <div className='quiz'>
        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={()=> setOptionChosen("A")}> {Questions[currentQuestion].optionA} </button>
            <button onClick={()=> setOptionChosen("B")}> {Questions[currentQuestion].optionB} </button>
            <button onClick={()=> setOptionChosen("C")}> {Questions[currentQuestion].optionC} </button>
            <button onClick={()=> setOptionChosen("D")}> {Questions[currentQuestion].optionD} </button>
        </div>
            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}> Terminar Quiz </button>  ) : (
                    <button onClick={nextQuestion} id="nextQuestion">Próxima Pergunta</button>
                )}
        
    </div>
  )
}

export default Quiz