'use client';

import Image from 'next/image';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useState} from 'react';
import {cn} from '@/lib/utils';
import RightArrow from '../icons/right-arrow';
import LeftArrow from '../icons/left-arrow';
import TestimonialCard from '../testimonial-card';
import {TESTIMONIALS} from '@/constants';

export default function Testimonials() {
  return (
    <section className="max-container flex flex-col justify-center items-center">
      <div className="section-title">TESTIMONIALS</div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start w-full mt-12 gap-10">
        <div className="flex flex-col justify-center items-center md:items-start max-w-lg gap-8">
          <h1 className="text-style-h1 max-w-2xl font-normal text-primary text-center md:text-start">
            From Our Community
          </h1>
          <p className="text-style-body2 max-w-xl font-light text-dark_grey text-center md:text-start">
            Here’s what people say about TrendMatter
          </p>
          <div className="flex max-md:hidden w-auto h-32 gap-4 items-center justify-center">
            <button className="swiper-button-prev " aria-label="Previous slide">
              <LeftArrow />
            </button>
            <button className="swiper-button-next" aria-label="Next slide">
              <RightArrow />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="h-auto w-2/3 max-w-lg"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <TestimonialCard
                  description={testimonial.feedback}
                  imageSrc={testimonial.image}
                  name={testimonial.name}
                  position={testimonial.role}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex md:hidden w-32 h-32 gap-4 items-center justify-center">
          <button className="swiper-button-prev " aria-label="Previous slide">
            <LeftArrow />
          </button>
          <button className="swiper-button-next" aria-label="Next slide">
            <RightArrow />
          </button>
        </div>
      </div>
    </section>
  );
}
