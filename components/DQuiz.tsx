"use client"

import React, { useState } from 'react';

const DQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = 'Why is documentation important for both the individuals coding and others who view the code?'
  const answers = ["a","b", "c", "d"];
  const correctAnswer = "d";
  const options = ["wrong", 'wrong', 'wrong', 'right']

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  return (
    <div className='text-center'>
      <h1 className='text-lg'>{question}</h1>
      <p className='text-base'>
        {options.map((option, index) =>

          <span key={index}>{String.fromCharCode(97 +index)}.) {option} </span>
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

export default DQuiz;