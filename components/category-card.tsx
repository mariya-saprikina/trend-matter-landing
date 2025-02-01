import React from 'react';
import Image from 'next/image';
import {CategoryProps, WhatsInsideProps} from '@/types';

export default function CategoryCard({name, imageSrc}: CategoryProps) {
  return (
    // <div className="group relative mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white/40 p-6 shadow-md shadow-gray-400/10 backdrop-blur-sm transition-all duration-75 hover:bg-white active:cursor-grabbing min-[450px]:w-auto ">
    <div className="relative overflow-hidden h-[90px] sm:h-[120px] md:h-[140px] lg:h-[150px] py-4 px-8 break-inside-avoid shadow-md rounded-3xl border border-gray-300 bg-white/20 backdrop-blur-lg transition-all duration-75 hover:bg-white active:cursor-grabbing">
      <h3 className="mb-2 text-left font-semibold text-gray-800 text-sm sm:text-base">
        Spotify Link
      </h3>
      <div className="absolute -bottom-10 -right-8 z-10 w-1/2">
        <Image src={imageSrc} alt={name} width={222} height={222}></Image>
      </div>
    </div>
  );
}
