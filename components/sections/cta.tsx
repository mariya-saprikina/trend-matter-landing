import {CTA_CARD_TEXT} from '@/constants';
import CtaCard from '../cta-card';

export default function Cta() {
  return (
    <section className="relative overflow-hidden gradient-container padding-y flex flex-col justify-center items-center gap-14">
      <div className="flex justify-center items-center max-container max-w-2xl">
        <h2 className="text-style-h1 text-center font-normal text-white">
          Access Free Trends You Can Use Immediately
        </h2>
      </div>

      <div className="w-full overflow-hidden">
        <div className="min-w-[1500px] grid grid-cols-[repeat(5,_minmax(200px,_1fr))] gap-y-8 relative">
          {CTA_CARD_TEXT.map((card, index) => (
            <CtaCard key={index} text={card} index={index} />
          ))}
        </div>
      </div>
      <button className="btn-secondary border-brand text-white">
        Unlock Your Next Idea
      </button>
    </section>
  );
}
