import Joke from './components/Joke';

export default function Home() {
  return (
    <div className="text-center h-full">
      <h1 className="my-8" style={{ textShadow: '4px 4px 4px #386641' }}>
        Christmas Fun
      </h1>
      <Joke />
    </div>
  );
}
