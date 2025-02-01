import Image from 'next/image';
import CheckmarkContent from '../checkmark-content';

export default function Benefits() {
  return (
    <section className="flex flex-col gap-10 max-container">
      <div className="flex flex-col justify-center items-center w-full space-y-6">
        <h1 className="text-style-h1 max-w-2xl text-center font-normal text-primary">
          Powered For Entrepreneurial Mind
        </h1>
        <p className="text-style-body2 max-w-xl text-center font-light text-dark_grey">
          All creators should have the opportunity to create something they’ll
          be proud of. And find the idea people really need
        </p>
      </div>

      <div className="flex flex-col max-sm:gap-10 gap-6 md:flex-row w-full items-start md:items-center justify-between">
        <div className="flex-col">
          <h2 className="text-style-h2 text-brand">Be Early</h2>
          <p className="mt-6 text-style-body2 font-light text-dark_grey max-w-md">
            Discover ideas that people in niche communities are talking about.
            Behind closed doors. Find trends that matter before they explode—be
            the first to act
          </p>
        </div>
        <div className="items-center justify-center">
          <Image
            src="./images/benefit-img.svg"
            alt="Hero bottom image"
            width={856}
            height={351}
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse max-md:gap-10 md:flex-row justify-between items:start md:items-center mt-10">
        <div className="flex items-center justify-center">
          <Image
            src="./images/benefit-img2.svg"
            alt="Hero bottom image"
            width={856}
            height={696}
            className="object-cover sm:max-2xl:-translate-x-1/4"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-style-h2 text-dark_dark_grey">
            No More Blind Development
          </h2>
          <p className="mt-6 text-style-body2 font-light text-dark_grey">
            Launching a product shouldn’t be a hassle
          </p>
          <div className="flex flex-col w-full gap-8 mt-10">
            <CheckmarkContent description="Stop spending months of development without validation" />
            <CheckmarkContent description="Find the ‘why’ behind every trend" />
            <CheckmarkContent description="No more guesswork, just clear strategy" />
          </div>
        </div>
      </div>
    </section>
  );
}
