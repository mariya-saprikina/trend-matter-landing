import React, {useState} from 'react';
import {ChevronDown} from 'react-feather';
import cn from 'classnames';
import Image from 'next/image';
import {FeatureProps, FeatureListProps} from '@/types';

export default function FeatureAccordion({features}: FeatureListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col w-full lg:w-auto lg:flex-row">
      <div className="lg:w-1/3">
        <div className="accordion">
          {features.map((item: FeatureProps, index: number) => (
            <AccordionItem key={index}>
              <AccordionTrigger
                onClick={() => toggleAccordion(index)}
                className={cn({'is-open': activeIndex === index})}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 flex-none transition-transform duration-300',
                    {
                      'rotate-180': activeIndex === index,
                    }
                  )}
                />
              </AccordionTrigger>
              <AccordionContent
                className={cn('overflow-hidden transition', {
                  'max-h-screen': activeIndex === index,
                  'max-h-0': activeIndex !== index,
                })}
              >
                <div className="accordion-content-inner py-2">
                  <p className="text-base text-gray-500">{item.content}</p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={features[activeIndex].image}
                    alt={features[activeIndex].title}
                    loading="lazy"
                    width={400}
                    height={200}
                    className="lg:hidden object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex lg:w-2/3 lg:pl-8">
        <div className="relative -mb-6 aspect-[1735/990] w-full overflow-hidden rounded-t-2xl shadow-2xl lg:mt-24 lg:w-[1000px] lg:h-[400px] xl:mt-10">
          <Image
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            loading="lazy"
            width={1735}
            height={990}
            className="absolute h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
}

const AccordionItem = ({children}: AccordionItemProps) => (
  <div className="border-b border-b-slate-200 py-3 last:border-none">
    {children}
  </div>
);

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const AccordionTrigger = ({
  children,
  className,
  onClick,
}: AccordionTriggerProps) => (
  <div
    className={cn(
      'flex items-center justify-between transition cursor-pointer',
      className
    )}
    onClick={onClick}
  >
    {children}
  </div>
);

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = ({children, className}: AccordionContentProps) => (
  <div className={cn(className)}>{children}</div>
);
