import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footerColor text-white p-4 text-center fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} Medport Global. All rights reserved.<br/>Info@medportglobal.co.uk<br/> 9-11 Gunnery Terrace, London SE18 6SW</p>
    </footer>
  );
};

export default Footer;
