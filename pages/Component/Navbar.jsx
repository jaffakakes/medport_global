import { useState } from "react";
import Image from 'next/image'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };


  return (
    <nav style={{ backgroundColor: "#C3C3C3" }}>
           <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
         <a href='/'><Image src="/Logo.png" alt="Logo" width={50} height={50} /></a> 
          <div className="hidden md:flex ml-10">
            <a href="/Aboutus" className="text-white font-medium hover:text-grey mx-2">About Us</a>

            <div className="relative group">
              <button className="text-white font-medium hover:text-grey mx-2 cursor-pointer" onClick={toggleDropdown}>Services</button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-black py-2 z-20">
                  <a href="/ServicePage?service=health-social-care" className="block px-4 py-2">Health and Social Care</a>
                  <a href="/ServicePage?service=hr-recruitment" className="block px-4 py-2">HR Recruitment</a>
                  <a href="/ServicePage?service=justice-prisons" className="block px-4 py-2">Justice and Prisons</a>
                  <a href="/ServicePage?service=housing-partnership" className="block px-4 py-2">Housing and Partnership</a>
                  <a href="/ServicePage?service=consultancy" className="block px-4 py-2">Consultancy</a>
                  <a href="/ServicePage?service=events" className="block px-4 py-2">Events</a>
                </div>
              )}
            </div>

            <a href="/Jobs" className="text-white font-medium hover:text-grey mx-2">Job/Vacancies</a>
            <a href="/Contactus" className="text-white font-medium hover:text-grey mx-2">Contact Us</a>
          </div>
        </div>
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
              {isOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="px-5 pb-3 md:hidden">
         
            <a  href="/Aboutus" className="block text-white font-medium hover:text-grey mb-2">About Us</a>
          
            <a className="block text-white font-medium hover:text-grey mb-2 cursor-pointer" onClick={toggleDropdown}>Services</a>
            {dropdownOpen && (
              <div className="bg-white text-black py-2">
                <a href="/ServicePage?service=health-social-care" className="block px-4 py-2">Health and Social Care</a>
                <a href="/ServicePage?service=hr-recruitment" className="block px-4 py-2">HR Recruitment</a>
                <a href="/ServicePage?service=justice-prisons" className="block px-4 py-2">Justice and Prisons</a>
                <a href="/ServicePage?service=housing-partnership" className="block px-4 py-2">Housing and Partnership</a>
                <a href="/ServicePage?service=consultancy" className="block px-4 py-2">Consultancy</a>
                <a href="/ServicePage?service=events" className="block px-4 py-2">Events</a>
              </div>
            )}
                  
            <a href="/Jobs" className="block text-white font-medium hover:text-grey mb-2">Job/Vacancies</a>
         
         
            <a href="/Contactus" className="block text-white font-medium hover:text-grey mb-2">Contact Us</a>
          
        </div>
      )}
    </nav>
  );
}
