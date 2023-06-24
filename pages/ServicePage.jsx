import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import { useRouter } from 'next/router';
import Header from './Component/Header';
import SLComponent from './Component/ServiceComponents/SLComponent';
import SRComponent from './Component/ServiceComponents/SRComponent';
import Footer from './Component/Footer';

const headersDictionary = {
    'health-social-care': 'Health And Social Care',
    'hr-recruitment': 'HR Recuritment',
    'justice-prisons': 'Justice And Prisons',
    'housing-partnership': 'Housing And Partnership',
    'consultancy': 'Consultancy',
    'events': 'Events'

   
  }; 

export default function ServicePage() {
    const router = useRouter();
    const { service } = router.query; // get the current page
    const headerText = headersDictionary[service]; // look up the text in your dictionary

    return (
<>
<Navbar/>
<Header headerText={headerText}/>
<SLComponent buttonColor={'#D9D9D9'} buttonText={'Contact us'} imageSrc={"/Hero_image.png"} headerText={"Our History"} text={ "This section can detail the founding of the company, significant milestones, and how the company has grown and diversified over the years."}/>
<SRComponent  buttonColor={'#FFFFFF'} buttonText={'Contact us'} imageSrc={"/Hero_image.png"} headerText={"Our Vision & Values"} text={ "This section can outline the company's mission, its values, and its vision for the future. It can discuss how these guide the company's diverse services and sectors."}/>
<SLComponent  buttonColor={'#D9D9D9'} buttonText={'Contact us'}  
imageSrc={"/Hero_image.png"} headerText={"Our Team"} text={ "This section can introduce key team members or departments, emphasizing their expertise and their commitment to providing quality service across all company sectors."}/>
<Footer/>
</>
    );

}