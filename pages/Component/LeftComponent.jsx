import React from 'react';
import Image from 'next/image';

export default function LeftComponent({ imageSrc, headerText, text }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-8 md:p-16  space-y-8 md:space-y-0 md:space-x-8 mx-auto">
      <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 overflow-hidden mx-auto">
        <Image src={imageSrc} alt={headerText} layout="responsive" width={150} height={150} />
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 pl-4 md:pl-0 space-y-4 flex flex-col justify-center mx-auto">
        <h2 className="text-3xl font-bold text-main mb-4 md:w-2/4 md:mx-auto">{headerText}</h2>
        <div className="text-container md:w-2/4 md:mx-auto">
          <p className="text-xl text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  );
}
