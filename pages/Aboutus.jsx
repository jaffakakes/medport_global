import React, { useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import Header from './Component/Header';
import LeftComponent from './Component/LeftComponent';
import RightComponent from './Component/RightComponent';
import Footer from './Component/Footer';
import styles from '@/utils/style';

const headersDictionary = {
    '/Aboutus': 'About Medport Global',
};

export default function Aboutus() {
    const router = useRouter();
    const currentPage = router.pathname; // get the current page
    const headerText = headersDictionary[currentPage]; // look up the text in your dictionary

    return (
        <div className="bg-footerColor w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                </div>
            </div>

            <div className={`bg-main ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Header headerText={headerText}/>
                </div>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <LeftComponent imageSrc={"/History.jpg"} headerText={"Our History"} text={ "This section can detail the founding of the company, significant milestones, and how the company has grown and diversified over the years."}/>
                    </div>
            </div>
            <div className={`bg-main ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <RightComponent imageSrc={"/Vision.jpg"} headerText={"Our Vision & Values"} text={ "This section can outline the company's mission, its values, and its vision for the future. It can discuss how these guide the company's diverse services and sectors."}/>
    
                </div>
            </div>
            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <LeftComponent imageSrc={"/Team.jpg"} headerText={"Our Team"} text={ "This section can introduce key team members or departments, emphasizing their expertise and their commitment to providing quality service across all company sectors."}/>
                    </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
