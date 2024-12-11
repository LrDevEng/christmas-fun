'use client';

import { useState } from 'react';

type JokeBody = {
  question: string;
  answer: string;
};

export default function Joke() {
  const [joke, setJoke] = useState<JokeBody>({
    question: 'Question',
    answer: 'Answer',
  });
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <h1>{joke?.question}</h1>
      {showAnswer && <h1>{joke?.answer}</h1>}
      <button
        onClick={() => {
          if (showAnswer) {
            setJoke({
              question: 'Question',
              answer: 'Answer',
            });
          }
          setShowAnswer(!showAnswer);
        }}
      >
        Show Answer
      </button>
    </div>
  );
}
