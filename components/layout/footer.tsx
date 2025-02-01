import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="max-container">
      <footer className="flex flex-col w-full">
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-8">
            <Image
              src="./images/logo-light.svg"
              alt="Trend Matter logo"
              width="280"
              height="50"
              className="max-sm:w-[181px] max-sm:h-[27px]"
            />
            {/* Subtitle */}
            {/* <p className="text-gray-400 mb-8">
              Get started now try our product
            </p> */}

            <Link
              href={'https://tally.so/r/wL0xO2'}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-brand p-1.5 px-2 text-style-body2 text-brand font-normal transition-all hover:bg-brand hover:text-white w-full text-center"
            >
              Join Waitlist
            </Link>
            {/* Email Input Form */}
            {/* <form className="relative w-[307px] lg:w-[410px]">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full px-4 py-3 border border-teal-600 rounded-xl bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-teal-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form> */}
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-36">
            <div>
              <h3 className="text-style-body3 font-normal text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-2 lg:space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Help centre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Account information
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-style-body3 font-normal text-white">
                Help and Solution
              </h3>
              <ul className="mt-4 space-y-2 lg:space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Talk to support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Support docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    System status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Covid responde
                  </Link>{' '}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-style-body3 font-normal text-white">
                Product
              </h3>
              <ul className="mt-4 space-y-2 lg:space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Update
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Beta test
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-style-body3 font-normal text-neutral hover:underline"
                  >
                    Pricing product
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-16 lg:mt-32 gap-3">
          <h3 className="text-style-body3 font-normal text-white text-center">
            © 2024 TrendMatter Inc. Copyright and rights reserved
          </h3>
          <div className="flex justify-center items-center gap-3">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-style-body3 font-normal text-white hover:underline"
            >
              Terms and Condtions
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-style-body3 font-normal text-white hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
