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
                    <LeftComponent imageSrc={"/History.jpg"} headerText={"Our History"} text={`Based in London, Medport Global is a consultancy firm deeply rooted in healthcare and public sector expertise. Our mission is to be a global leader in ethical, innovative, and integrated consultancy services. Our wealth of experience, derived from working with NHS organisations and international healthcare and justice partners, enables us to offer comprehensive services including consulting advice, staffing, and support. At the heart of our operations, we prioritize the needs of our patients and partners, focusing on delivering safe, affordable healthcare to communities globally. As a crucial part of the healthcare ecosystem, we aim not only to exist but to make a real difference, enhancing patient lives and impacting communities positively.`}/>
                    </div>
            </div>
            <div className={`bg-main ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <RightComponent imageSrc={"/Vision.jpg"} headerText={"Our Vision & Values"} text={ `Medport Global's foundation is firmly rooted in three key values: Integrity, Duty, and Innovation.

Our Integrity is evident in our unyielding focus on patients' needs and our steadfast commitment to quality care. Honesty and ethics shape every interaction we have with our customers, patients, and partners.

Our Duty is to deliver exceptional care to our patients and considerate service to our customers, always striving to surpass expectations. Every action is guided by a profound sense of responsibility and accountability.

Our drive for Innovation inspires continual reflection, learning, and growth, utilising cutting-edge technologies and evidence-based practices to enhance our service quality.

These values define our work, guiding our superior consultancy and healthcare staffing services. As committed members of the healthcare community, we are dedicated to making a tangible, positive difference in the lives of our patients.`}/>
    
                </div>
            </div>
            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <LeftComponent imageSrc={"/Team.jpg"} headerText={"Our Commitment & Partnerships"} text={ `At Medport Global, our dedication to Integrity, Duty, and Innovation defines us. We uphold honesty, transparency, and accountability, and deeply value trust in our relationships with clients and partners.

Our Duty drives us to acknowledge the significant impact of our work on lives, aiming to achieve the best outcomes for our clients and positively impact the communities we serve.

Our belief in Innovation leads us to continuously explore efficient, high-quality healthcare services, leveraging technology and data to meet our clients' unique needs and transform healthcare delivery.

Our Partnerships with leading organisations reinforce our capacity to deliver optimal services. By combining resources and expertise, we heighten our commitment to delivering value to our clients, stakeholders, and the broader healthcare industry.`}/>
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
