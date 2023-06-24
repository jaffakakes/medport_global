import React from 'react';

const MyComponent = ({ headerText }) => {
    const isBrowser = typeof window !== "undefined";
    const isMobile = isBrowser && window.innerWidth <= 768;
    
    const styles = {
        display: 'flex',
        alignItems: 'center', // This will align items vertically in the middle
        justifyContent: 'flex-start', // This will align items to the left
        height: isMobile ? '100vh' : '300px',
        backgroundColor: '#D9D9D9',
        color: 'white',
        fontWeight: 'bold',
        padding: '10px',
        fontSize: '55px',
        textAlign: isMobile ? 'center' : 'left',
    };
  
    return (
      <div style={styles}>
        <p>{headerText}</p>
      </div>
    );
  };

export default MyComponent;