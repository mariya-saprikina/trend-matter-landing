import {cn} from '@/lib/utils';
import Image from 'next/image';
import LearnMoreArrow from './icons/learn-more-arrow';

export default function FeatureCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-between sm:items-start gap-4 max-sm:h-64 h-[350px] col-span-1 rounded-2xl border-2 p-4 sm:p-10',
        {
          'bg-primary border-primary xl:col-span-2': index === 0,
          'bg-brand border-brand': index === 2,
          'border-brand': index !== 0,
        }
      )}
    >
      {index === 0 && (
        <Image
          src="./images/feature-graphs.svg" // Path to your SVG file
          alt="Graph illustration"
          width={188}
          height={224}
          className="max-sm:hidden absolute bottom-0 right-8 w-[188px] h-[224px] xl:w-[250px] xl:h-[301px]"
          // Ensures the image fits within the container
        />
      )}
      <div className="flex flex-col items-center sm:items-start gap-3">
        <h2
          className={`h-14 text-style-h3 text-center font-normal ${
            index === 0 || index === 2 ? 'text-white' : 'text-primary'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-style-body2 text-dark_grey font-light text-center sm:text-start ${
            index === 0 || index === 2 ? 'text-white' : 'text-primary'
          } ${index === 0 ? 'sm:w-2/3' : ''}`}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <p
          className={`text-style-body2 text-dark_grey font-light ${
            index === 0 || index === 2 ? 'text-white' : 'text-primary'
          }`}
        >
          Learn More
        </p>
        <LearnMoreArrow
          className={`${index === 0 || index === 2 ? 'text-white' : 'text-primary'}`}
        />
      </div>
    </div>
  );
}
