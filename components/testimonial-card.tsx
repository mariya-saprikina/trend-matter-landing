import {TestimonialCardProps} from '@/types';
import Image from 'next/image';
import Quotes from './icons/quotes';

export default function TestimonialCard({
  description,
  imageSrc,
  name,
  position,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col w-full items-start justify-center gap-6 max-sm:max-w-sm">
      <Quotes />
      <p className="text-style-body1 max-md:text-body2 font-source_sans_3 font-normal text-primary">
        {description}
      </p>
      <div className="flex flex-row justify-center items-center">
        <Image
          src={imageSrc}
          alt="Testimonial Image"
          loading="lazy"
          className="rounded-full object-contain"
          width={76}
          height={77}
        />
        <div className="flex flex-col ml-4">
          <p className="text-style-body1 max-md:text-body2 font-source_sans_3 font-semibold text-dark_grey">
            {name}
          </p>
          <p className="text-style-body2 max-md:text-body3 font-source_sans_3 font-normal text-dark_grey">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}