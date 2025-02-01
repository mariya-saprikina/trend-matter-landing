import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-start items-center gap-10 max-container">
      <div className="flex flex-col justify-center items-center w-full mt-20 space-y-6">
        <p className="text-style-body1 font-normal text-primary">
          Dominate Your Market With
        </p>
        <h1 className="text-style-hero font-bold text-primary text-center">
          Ideas Backed By Data
        </h1>
        <p className="text-style-body1 sm:max-w-4xl text-center font-light text-primary">
          We give you a team of AI data analysts to find niche movements that’re
          going to explode soon, they find trends, look into what people talk
          about it, and provide you with the deep insights report
        </p>
        <div className="flex w-full justify-center items-center gap-3">
          <Link
            href={'https://tally.so/r/wL0xO2'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-normal"
          >
            Join Waitlist
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary font-normal"
          >
            Watch Demo
          </Link>
          {/* <button className="btn-primary">Unlock Trends</button>
          <button className="btn-secondary ml-5">Get a demo</button> */}
        </div>
        {/* New image container */}
      </div>
      {/* Adjust height as needed */}
      <Image
        src="./images/hero-img-real.png"
        alt="Hero bottom image"
        width={1124}
        height={799}
        quality={100}
        className="rounded-2xl shadow-lg"
        unoptimized={true}
        // Adjust translate-y to control overflow
      />
    </section>
  );
}
