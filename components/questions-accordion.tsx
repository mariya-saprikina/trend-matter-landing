import React, {useState} from 'react';
import {ChevronDown} from 'react-feather';
import cn from 'classnames';
import Image from 'next/image';
import {QuestionCardProps, QuestionListProps} from '@/types';

export default function QuestionAccordion({questions}: QuestionListProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col w-full sm:w-1/2">
      <div className="accordion">
        {questions.map((item: QuestionCardProps, index: number) => (
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
            </AccordionContent>
          </AccordionItem>
        ))}
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
