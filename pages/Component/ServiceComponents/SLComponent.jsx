import React from 'react';
import Image from 'next/image';

export default function SLComponent({ imageSrc, headerText, text, buttonColor, buttonText }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16 md:space-x-8 space-y-8 md:space-y-0">
      <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
        <Image src={imageSrc} alt={headerText} layout="responsive" width={150} height={150} />
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 pr-4 md:pr-0 space-y-4 flex flex-col items-end">
  <div>
  <h2 className="text-3xl font-bold text-main mb-4 md:w-2/4 ">{headerText}</h2>
  <div className="text-container md:w-2/4">
    <p className="text-xl text-gray-600">{text}</p>
  </div>
  <button style={{ backgroundColor: buttonColor }} className="px-4 py-2 mt-4 text-white font-semibold">
    {buttonText}
  </button> 
  </div>
 
</div>

    </div>
  );
}
