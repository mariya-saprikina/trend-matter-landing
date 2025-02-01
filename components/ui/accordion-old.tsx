import {cn} from '@/utils/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';
import * as React from 'react';
import Image from 'next/image';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({className, ...props}, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'border-b border-b-slate-200 py-3 last:border-none',
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between text-base font-semibold text-gray-600 transition-all sm:text-lg [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 flex-none transition-transform duration-300" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base',
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const accordionData = [
  {
    title: 'How do I get started with TrendMatter?',
    content: 'Content for the first accordion item.',
    link: 'https://trends.google.com/trends/explore?q=Indify',
    image: '/logo.png',
  },
  {
    title: 'How do I use TrendMatter?',
    content: 'Content for the second accordion item.',
    link: 'https://trends.google.com/trends/explore?q=Indify',
    image: '/logo.png',
  },
];

export default function Questions() {
  return (
    <Accordion type="single" collapsible>
      {accordionData.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export {Accordion, AccordionContent, AccordionItem, AccordionTrigger};
