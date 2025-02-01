import {WhatsInsideProps} from '@/types';
import Image from 'next/image';
import React from 'react';

export default function WhatsInsideCard({
  name,
  description,
  imageSrc,
}: WhatsInsideProps) {
  return (
    <div className="break-inside-avoid shadow-md rounded-3xl border border-gray-300 bg-white/20 backdrop-blur-lg transition-all hover:shadow-lg">
      <div className="flex flex-col justify-between p-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-700 mb-8">{description}</p>
        </div>
        {imageSrc && (
          <div className="flex justify-center">
            <Image
              src={imageSrc}
              alt={name}
              width={48}
              height={48}
              className="rounded-full border border-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  );
}
