import Joke from './components/Joke';

export default function Home() {
  return (
    <div className="text-center h-full">
      <h1 className="my-8">Christmas Fun</h1>
      <Joke />
    </div>
  );
}
