import { useState } from 'react'
import './App.css'
import antonio from './assets/antoniofreshmen.jpg'
import dictatorship from './assets/nivdictatorship.jpg'
import dragon from './assets/nivtraindragon.jpg'
import shrek from './assets/antonio shrek.jpg'

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const numberOfImages = 3; // minus it by 1

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === numberOfImages ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? numberOfImages : prevIndex - 1
    );
  };

  // Function to get current image based on index
  const getCurrentImage = () => {
    switch(currentImageIndex) {
      case 0:
        return antonio;
      case 1:
        return dictatorship;
      case 2:
        return dragon;
      case 3:
        return shrek;
      default:
        return dictatorship;
    }
  };

  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Propaganda Machine</h1>
      
      <div style={{ 
        width: '95vw',
        height: '80vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
      }}>
        <img
          src={getCurrentImage()}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '95%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
        
        <button 
          onClick={previousImage}
          style={{
            position: 'fixed',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
        >
          ←
        </button>

        <button 
          onClick={nextImage}
          style={{
            position: 'fixed',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default App