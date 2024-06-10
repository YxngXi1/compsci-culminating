"use client"

import React, { useState } from 'react';

interface QuizProps {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const Quiz: React.FC<QuizProps> = ({ question, answers, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  return (
    <div className='text-center my-12 mx-12'>
      <h1 className='text-5xl bold'>{question}</h1>
      <p className='text-xl'>
        {answers.map((answer, index) =>
          <span key={index}>{String.fromCharCode(97 + index)}.) {answer} </span>
        )}
      </p>
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(answer)}
          style={{
            backgroundColor: selectedAnswer === answer ? (isCorrect ? 'green' : 'red') : '#fff',
            color: selectedAnswer === answer ? '#fff' : '#000',
            marginRight: '20px',
          }}
        >
          {String.fromCharCode(97 + index)}
        </button>
      ))}
    </div>
  );
};

export default Quiz;