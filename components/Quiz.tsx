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
    <div className='text-center'>
      <h1 className='text-lg'>{question}</h1>
      <p className='text-base'>
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
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Quiz;