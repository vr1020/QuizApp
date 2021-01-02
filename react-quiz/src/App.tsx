import React, {useState} from 'react';

//Components
import QuestionCard from './components/QuestionCard';
import {fetchQuestions} from './API';

//Types
import {Difficulty} from './API';

// the number of total questions;
const TOTAL_QUESTIONS = 10;

function App() 
{

  //  the state set indicating whether the quiz is ready to go or not;
  const[loading,setLoading] = useState(false);

  //  the state set indicating the question object that the user is on;
  const [questions,setQuestions] = useState([]);

  //  the state set indicating the question number that the user is on;
  const[number,setNumber] = useState(0);

  //  the state set indicating the answer that the user has chosen;
  const[userAnswers, setUserAnswers] = useState([]);

  //  the state set indicating the user's score (?);
  const[score,setScore] = useState(0);

  //  the state set indicating if the game is done or not;
  const[gameOver,setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY));

  const startTrivia = async function myFunc()
  {

  }

  const checkAnswer = function (e: React.MouseEvent<HTMLButtonElement>)
  {

  }

  const nextQuestion = function()
  {

  }

  return (
          <div className="App">
            //heading stuff
            <h1>My React Quiz</h1>
            <button className="startBtn" onClick={startTrivia}>
              Start
            </button>
            <p className="score">Score:</p>
            <p>Loading Questions</p>
{/* 
            <QuestionCard>
              questionNumber={number + 1};
              totalQuestions = {TOTAL_QUESTIONS};
              question = {questions[number].question};
              answer = {questions[number].answer};
              userGuess = {userAnswers ? userAnswers[number] : undefined};
              returnBack={checkAnswer};

            </QuestionCard> */}

            <button className="next" onClick={nextQuestion}> Next Question</button>

          </div>
  );
}

export default App;
