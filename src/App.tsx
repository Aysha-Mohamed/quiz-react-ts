import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";

//types
import { Difficulty } from "./API";

const App = () => {
  const TOTAL_QUESTIONS = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY));
  //one function to execute on start

  const startTrivia = async () => {};

  //function to check answers

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {};

  //function for next question

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswers}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
