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
        `The foundation of Medport Global was laid by seasoned professionals from the frontline of NHS organizations, private healthcare providers, and global health and justice partners. Our extensive experience and expertise in these fields have driven the creation of an all-encompassing service. This service, designed to advise, consult, staff, and support purchasing partners, fosters a collaborative atmosphere to enable the delivery of safe, affordable healthcare to the communities we collectively serve.`,
        `Medport Global offers a diverse portfolio of services aimed at empowering healthcare and social care organizations. These include enhancing Leadership Capability, strategizing 'Grip and Control', System and Financial Recovery, Service and Pathway Development, Backlog Clearance and Support, providing Executive Interims, and offering OD and HR Support. Our services are specifically tailored to meet the unique needs of each organization, ensuring optimal service delivery and patient care.`,
        `As a part of our wide-ranging service offering, Medport Global extends consulting services to healthcare and social care organizations. Our experts provide tailored advice and strategies across operational areas, quality improvement, regulatory compliance, and strategic planning. The end goal of our services is to enable these organizations to deliver efficient, high-quality care to the communities they serve, reaffirming our commitment to improved health outcomes globally.`,
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Hsc_1.jpg?alt=media&token=190ef82e-b27d-44e6-b6cd-d9b7a27f85a9',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Template.png?alt=media&token=05ed2607-4625-4d00-baa9-1a9cb8b9c8c9',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/Hsc_2.png?alt=media&token=16680578-cb4b-4690-b2c7-b830b37a66ab',
        "Our Founding Principles and Integrated Service",
        "Range of Services",
        "Consulting Services to Healthcare & Social Care Organizations"

    ],
    'hr-recruitment': [
        'HR Recruitment', 
        `Medport Global offers tailored staffing solutions specifically designed to meet the needs of local authorities and government organizations. We understand the unique challenges of these sectors and are dedicated to providing qualified professionals to support their operations. Our services ensure seamless and efficient workforce management for these entities, covering temporary, permanent, specialized roles, and consultancy needs.`,
        `We offer various types of staffing solutions based on our clients' unique needs. For short-term needs or project-specific roles, we provide temporary staffing from a pool of skilled candidates. For long-term positions, we offer permanent staffing services with thorough candidate assessments to identify suitable individuals. Specialized staffing is also available, catering to roles requiring specialized skills and knowledge in areas like legal services, finance, policy development, healthcare, and technology.`,
        `Apart from supplying staff, we offer staffing consultancy services, assisting local authorities and government organizations in optimizing their workforce strategies. Our consultants analyze staffing needs, develop recruitment and retention strategies, and provide guidance on workforce planning and development. We believe that our comprehensive staffing solutions and sector-specific expertise can significantly contribute to the success of local authorities and government organizations, aiding them in achieving their objectives and delivering high-quality community services.`,
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2Ftoptalent.jpg?alt=media&token=09b43ded-87dd-4056-ab68-358ee4dd60c8',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2Frecuitment_process.jpg?alt=media&token=1c173749-ccd6-462a-ad88-cefc3923985b',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2FDiverse.jpg?alt=media&token=233326f7-063e-46ef-a44d-b5647eab495d',
        'Overview of Staffing Solutions',
        'Staffing Types - Temporary, Permanent, and Specialized',
        'Staffing Consultancy and Its Importance'
    ],
    
    'legal-advisory': [
        'Legal and Advisory',
        `Medport Global provides a complete range of legal advisory and consultancy services to businesses. With a team of skilled consultants, we focus on immediate action, problem-solving, and delivering tangible results. Moreover, our advisors are proficient in preparing clients for potential future uncertainties and assisting them in achieving their growth goals.`,
        `Medport Global's legal services cater to varied business needs, providing commercial advice and consultancy. We guide clients through complex legal aspects, ensuring sustainability. Our broad expertise includes assisting with entity governance, compliance, intellectual property, IT, commercial contracts, and dispute resolution. We also support global businesses in planning reorganizations, involving restructuring, mergers, acquisitions, and cross-border transactions, enabling businesses to navigate legal challenges confidently.`,
        `Through these comprehensive legal services, Medport Global becomes a catalyst for broader business transformation. We ensure alignment of legal considerations with strategic objectives, enabling our clients to navigate legal hurdles effectively and promote sustainable growth.`,
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/prison%2FNew_prison_officer_apprenticeship.jpg?alt=media&token=c104fc85-f9e6-4841-afc6-5033e4479b45',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/prison%2FPrison_Officer.jpg?alt=media&token=cdf8d38f-993a-4bfb-b7ce-0b1a0ec05d60',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/prison%2Fprisons.jpg?alt=media&token=7f3894dc-79ed-429a-9cff-fa89beae98b4',
        'Comprehensive Legal Advisory Services',
        'Areas of Legal Expertise',
        'Legal Catalyst for Business Transformation'
    ],
    'housing-partnership': [
        'Housing And Partnership',
        `Medport Global plays a significant role in supporting the housing initiatives of the design, development, and construction department in the London Borough of Richmond and Wandsworth. Our team provides indispensable support and expert knowledge to ensure the successful implementation of housing projects in these localities.`,
        `Medport Global also promotes sustainability and addresses environmental challenges. We extend our support to Net Zero projects nationwide, assisting organizations in achieving carbon neutrality and minimizing environmental impact. Our range of services includes strategic planning, innovative technology solutions, and advisory support, facilitating the shift towards sustainable housing practices. By collaborating with us, housing authorities can benefit from our deep knowledge in the housing sector and commitment to promoting sustainable, environmentally-friendly practices.`,
       `Medport Global actively seeks to establish strategic partnerships with organizations like Portland Clinical and M8. These alliances involve the mutual exchange of skills, resources, and knowledge. Such collaborations lead to knowledge exchange, resource sharing, market expansion, joint research and development, and greater collective impact. By partnering with us, organizations can leverage our extensive healthcare industry expertise and contribute jointly to improving healthcare solutions, advancing new technologies, and shaping the healthcare industry for the better. The specific nature and objectives of these partnerships depend on the shared goals and priorities of the involved parties.`,
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/housing%2Fjames-feaver-O4Ywu_YNj5A-unsplash.jpg?alt=media&token=bb011126-815d-4cbe-b1da-d9af5f0c0c77',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/housing%2Fsamson-ZGjbiukp_-A-unsplash.jpg?alt=media&token=ab5e2d4c-6599-483d-8889-061ea8d175d2',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/housing%2Fwiktor-karkocha-WA2uSCbTXkI-unsplash.jpg?alt=media&token=ecaa2372-c20a-4848-816d-9543cea8f2d8',
        'Support for Housing Initiatives',
        'Sustainable Housing and Environmental Impact',
        'Strategic Partnerships'
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