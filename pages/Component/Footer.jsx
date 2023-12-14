import React from 'react';
import styles from "@/utils/style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-main p-10`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start ">
        <p className={`font-outfits font-medium text-white text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}>
        Info@medportglobal.co.uk<br/>+441322681044<br/> 
        </p>
      </div>


    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white">
      <p className="font-outfits font-normal text-center text-[18px] leading-[27px] text-white pb-5">
      &copy; {new Date().getFullYear()} Medport Global. All rights reserved.
      </p>


    </div>
  </section>
);

export default Footer;