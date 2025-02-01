import Benefits from '@/components/sections/benefits';
import Cta from '@/components/sections/cta';
import Features from '@/components/sections/features';
import Hero from '@/components/sections/hero';
import Pricing from '@/components/sections/pricing';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import React from 'react';

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="px-6 md:px-12 lg:px-16 sm:py-24 py-12 sm:pt-32 bg-secondary"
      >
        <Hero />
      </section>
      {/* <section id="benefits" className="bg-white padding">
        <Benefits />
      </section>
      <section className="bg-secondary sm:py-16 py-8 sm:px-16 px-8">
        <Stats />
      </section>
      <section id="features" className="bg-secondary padding">
        <Features />
      </section>
      <section className="bg-primary padding">
        <Pricing />
      </section>
      <section className="bg-secondary padding">
        <Testimonials />
      </section>
      <section className="bg-primary">
        <Cta />
      </section> */}
    </>
  );
}
