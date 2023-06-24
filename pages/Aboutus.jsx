import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import { useRouter } from 'next/router';
import Header from './Component/Header';
import LeftComponent from './Component/LeftComponent';
import RightComponent from './Component/RightComponent';
import Footer from './Component/Footer';
const headersDictionary = {
    '/Aboutus': 'About us',
   
  }; 

export default function Aboutus() {
    const router = useRouter();
    const currentPage = router.pathname; // get the current page
    const headerText = headersDictionary[currentPage]; // look up the text in your dictionary

    return (
<>
<Navbar/>
<Header headerText={headerText}/>
<LeftComponent imageSrc={"/Hero_image.png"} headerText={"Our History"} text={ "This section can detail the founding of the company, significant milestones, and how the company has grown and diversified over the years."}/>
<RightComponent  imageSrc={"/Hero_image.png"} headerText={"Our Vision & Values"} text={ "This section can outline the company's mission, its values, and its vision for the future. It can discuss how these guide the company's diverse services and sectors."}/>
<LeftComponent  imageSrc={"/Hero_image.png"} headerText={"Our Team"} text={ "This section can introduce key team members or departments, emphasizing their expertise and their commitment to providing quality service across all company sectors."}/>
<Footer/>
</>
    );

}