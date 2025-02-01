import {STATS} from '@/constants';

export default function Stats() {
  return (
    <section className="max-container bg-white rounded-lg flex flex-col justify-center items-center p-10 gap-6">
      <h1 className="text-style-h1 text-primary text-center font-normal max-w-2xl">
        Save Weeks of Research
      </h1>
      <p className="text-style-body2 font-light text-dark_grey max-w-2xl text-center">
        Automate your trend discovery and analysis with precise, actionable
        insights. Get clear recommendations that you can put into action
        immediately, boosting your business outcomes
      </p>
      <div className="flex flex-wrap justify-center items-center gap-20 xl:gap-36">
        {STATS.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center max-sm:h-32 h-52"
          >
            <h1 className="text-[56px] sm:text-[88px] text-brand font-bold">
              {stat.number}
            </h1>
            <p className="text-style-body2 text-dark_grey font-light text-center max-w-64 h-full">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
