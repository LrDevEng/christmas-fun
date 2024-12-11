'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getRandomImage } from '../actions';

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
  const [imgUrl, setImgUrl] = useState('');
  const buttonText = showAnswer ? 'Next Question' : 'Show Answer';

  const fetchJoke = async () => {
    const response = await fetch('https://christmasjoy.dev/api/jokes?random');
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    getRandomImage(joke.question).then((image) => {
      setImgUrl(image?.urls.regular ? image.urls.regular : '');
    });
  }, [joke]);

  return (
    <div>
      {imgUrl.length > 0 && (
        <div className="relative">
          <div className="absolute top-0 py-4 bg-black bg-opacity-60 w-[800px] text-center">
            <h1>{joke?.question}</h1>
          </div>
          <Image src={imgUrl} alt="Christmas Image" width={800} height={600} />
          {showAnswer && (
            <div className="absolute bottom-0 py-4 bg-black bg-opacity-60 w-[800px] text-center">
              <h1>{joke?.answer}</h1>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => {
          if (showAnswer) {
            fetchJoke();
          }
          setShowAnswer(!showAnswer);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
