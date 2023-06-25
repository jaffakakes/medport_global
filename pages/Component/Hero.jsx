import styles from '@/utils/style';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <div className="space-y-4 md:px-20">
            <h1 className="md:text-6xl text-4xl font-bold text-white mb-2">Medport Global</h1>
            <h3 className="md:text-4xl text-2xl font-semibold text-white">Shaping for a brighter future</h3>
            <p className="md:text-2xl text-xl text-gray-600">Your multifaceted solution for healthcare, justice services, consulting, HR recruitment, housing, and partnerships.</p>
          </div>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative md:px-20`}>
        <Image src="/Hero_Image.png" alt="Hero" width={300} height={300} className="md:w-2/3 w-3/4" />
      </div>
    </section>
  );
}

