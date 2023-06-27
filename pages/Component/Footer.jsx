import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footerColor text-white p-4 text-center fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} Medport Global. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
