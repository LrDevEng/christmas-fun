import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Christmas fun about page.',
};

export default function About() {
  return (
    <div className="text-center flex flex-col justify-between min-h-[95vh]">
      <div>
        <div className="text-xl mt-8">
          Designed & Developed with 💚 by LrDevEng
        </div>
        <div className="text-xl mt-8">
          Follow my work on{' '}
          <Link
            className="underline"
            href="https://github.com/LrDevEng"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </div>
      </div>
      <div className="text-sm my-8">
        Background image designed by{' '}
        <Link
          className="underline"
          href="https://www.freepik.com/"
          target="_blank"
        >
          Freepik.
        </Link>
      </div>
    </div>
  );
}
