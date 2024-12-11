'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getRandomImage } from '../actions';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

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
  const [playing, setPlaying] = useState(false);
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
    <div className="flex flex-col items-center">
      {imgUrl.length > 0 && (
        <div className="relative">
          <div className="absolute top-0 py-4 bg-black bg-opacity-60 w-[800px] text-center">
            <h2>{joke?.question}</h2>
          </div>
          <Image src={imgUrl} alt="Christmas Image" width={800} height={600} />
          {showAnswer && (
            <div className="absolute bottom-0 py-4 bg-black bg-opacity-60 w-[800px] text-center">
              <h2>{joke?.answer}</h2>
            </div>
          )}
        </div>
      )}

      <button
        className="btn my-8"
        onClick={() => {
          if (showAnswer) {
            fetchJoke();
          }
          if (!playing) {
            setPlaying(true);
          }
          setShowAnswer(!showAnswer);
        }}
      >
        {buttonText}
      </button>
      <div>
        <ReactPlayer
          url="https://soundcloud.com/saber-sarlak/chris-rea-driving-home-for-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          playing={playing}
          loop={true}
          controls={true}
          onPause={() => setPlaying(false)}
        />
      </div>
    </div>
  );
}
