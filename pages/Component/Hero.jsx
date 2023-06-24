import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center bg-main  p-8 md:space-x-8 space-y-8 md:space-y-0">
      <div className="flex-1 ">
        <Image src="/Hero_image.png" alt="Hero" width={500} height={300} />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold text-white mb-2">Medport Global</h1>
        <h3 className="text-2xl font-semibold text-white">Shaping for a brighter future</h3>
        <p className="text-xl text-gray-600">Your multifaceted solution for healthcare, justice services, consulting, HR recruitment, housing, and partnerships.</p>
      </div>
    </div>
  );
}
