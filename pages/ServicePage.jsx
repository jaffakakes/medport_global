import React, { useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import Header from './Component/Header';
import SLComponent from './Component/ServiceComponents/SLComponent';
import SRComponent from './Component/ServiceComponents/SRComponent';
import Footer from './Component/Footer';
import styles from '@/utils/style';

const headersDictionary = {
    'health-social-care': [
        'Health And Social Care', 
        'Our health and social care services aim to enhance leadership capabilities, provide expertise in system and financial recovery, assist in the development of healthcare services and pathways, and provide solutions to service backlogs.',
        'Through our services, we enable healthcare and social care organizations to deliver safe, efficient, and high-quality care to their communities.',
        'We strive for continuous improvement and innovation in our services, guided by our commitment to collaboration, integrity, and excellence in healthcare delivery.',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Hsc_1.jpg?alt=media&token=190ef82e-b27d-44e6-b6cd-d9b7a27f85a9',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Template.png?alt=media&token=05ed2607-4625-4d00-baa9-1a9cb8b9c8c9',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Hsc_2.png?alt=media&token=16680578-cb4b-4690-b2c7-b830b37a66ab',
        "Our Comprehensive Health and Social Care Services",
        "Empowering High-Quality Care Delivery",
        "Our Commitment to Excellence and Innovation"

    ],
    'hr-recruitment': [
        'HR Recruitment', 
        'Our HR recruitment services cater to a wide range of sectors, aiming to match organizations with top talent that meet their unique needs.',
        'With a comprehensive approach, we streamline the recruitment process, ensuring organizations save time, resources, and obtain the best possible fit for their open positions.',
        'We foster a people-centered approach in our recruitment services, valuing diversity, inclusivity, and prioritizing professional growth for the candidates we place.',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2Ftoptalent.jpg?alt=media&token=09b43ded-87dd-4056-ab68-358ee4dd60c8',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2Frecuitment_process.jpg?alt=media&token=1c173749-ccd6-462a-ad88-cefc3923985b',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2FDiverse.jpg?alt=media&token=233326f7-063e-46ef-a44d-b5647eab495d',
        'Matching Top Talent with Organizational Needs',
        'Streamlining the Recruitment Process',
        'Fostering Diversity, Inclusivity and Professional Growth'
    ],
    
    'justice-prisons': [
        'Justice And Prisons',
        'We deliver solutions in the justice and prison sectors to support safe and efficient operations and promote wellbeing.',
        'Our experience and partnerships enable us to develop programs contributing to effective and sustainable systems within the justice landscape.',
        'Through our services, we strive to make a positive impact on individuals involved in the justice and prison system.',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/prison%2FNew_prison_officer_apprenticeship.jpg?alt=media&token=c104fc85-f9e6-4841-afc6-5033e4479b45',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/prison%2FPrison_Officer.jpg?alt=media&token=cdf8d38f-993a-4bfb-b7ce-0b1a0ec05d60',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/prison%2Fprisons.jpg?alt=media&token=7f3894dc-79ed-429a-9cff-fa89beae98b4',
        'Delivering Effective Solutions in Justice and Prisons',
        'Driving Operational Sustainability in Justice Services',
        'Making a Positive Impact on Justice-Involved Individuals'
    ],
    'housing-partnership': [
        'Housing And Partnership',
        'We work with housing partners to promote integrated, efficient systems that support holistic wellbeing.',
        'We believe in creating environments that go beyond housing to encompass aspects of health, safety, and community development.',
        'Our commitment extends to advocating for access to safe, affordable housing for all, reflecting our core values.',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/housing%2Fjames-feaver-O4Ywu_YNj5A-unsplash.jpg?alt=media&token=bb011126-815d-4cbe-b1da-d9af5f0c0c77',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/housing%2Fsamson-ZGjbiukp_-A-unsplash.jpg?alt=media&token=ab5e2d4c-6599-483d-8889-061ea8d175d2',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/housing%2Fwiktor-karkocha-WA2uSCbTXkI-unsplash.jpg?alt=media&token=ecaa2372-c20a-4848-816d-9543cea8f2d8',
        'Promoting Integrated Systems in Housing',
        'Creating Environments for Holistic Wellbeing',
        'Advocating for Access to Safe and Affordable Housing'
    ],
    'consultancy': [
        'Consultancy',
        'Our consultancy services span a range of sectors, offering expertise and advice to help organizations navigate their unique challenges.',
        'We support organizations in optimizing operations, strategizing effectively, and complying with regulations across various sectors.',
        'We deliver measurable results that improve efficiency and drive success, providing our partners with the tools they need to thrive.',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Consultancy%2Fscott-graham-5fNmWej4tAA-unsplash.jpg?alt=media&token=239c0801-6138-4868-8cb7-7328b632a22c',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Consultancy%2Fheadway-5QgIuuBxKwM-unsplash.jpg?alt=media&token=717d79c2-d8dc-4f5e-a0ba-1c462730eed0',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Consultancy%2Fchristina-wocintechchat-com-p0qKsW3uqA4-unsplash.jpg?alt=media&token=3d00eadd-1dfa-439c-84ee-c8763c7aef49',
        'Navigating Challenges with Expert Consultancy',
        'Driving Operational and Strategic Success',
        'Delivering Measurable Results for Partners'
    ],

}; 

export default function ServicePage() {
    const router = useRouter();
    const { service } = router.query; // get the current page
    const headerText = headersDictionary[service]; // look up the text in your dictionary

    // Check if the headerText array exists before trying to render the components
    if (!headerText) {
        const { service } = router.query; // get the current page
        const headerText = headersDictionary[service]; // look up the text in your dictionary
        return headerText
    }


    return (
<>
<div className="bg-footerColor w-full overflow-hidden">
<div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-main ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Header headerText={headerText[0]}/>
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
<SLComponent buttonColor={'#D9D9D9'} buttonText={'Contact us'} imageSrc={headerText[4]} headerText={headerText[7]} text={ headerText[1]}/>
</div>
      </div>
      <div className={`bg-main ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
<SRComponent  buttonColor={'#FFFFFF'} buttonText={'Contact us'} imageSrc={headerText[5]} headerText={headerText[8]} text={ headerText[2]}/>
</div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
<SLComponent  buttonColor={'#D9D9D9'} buttonText={'Contact us'}  imageSrc={headerText[6]} headerText={headerText[9]} text={ headerText[3]}/>
</div>
      </div>
<Footer/>
</div>
</>
    );

}