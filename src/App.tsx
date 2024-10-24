import { useState } from 'react'
import './App.css'
import antonio from './assets/antoniofreshmen.jpg'
import dictatorship from './assets/nivdictatorship.jpg'
import dragon from './assets/nivtraindragon.jpg'

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 2 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? 2 : prevIndex - 1
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
      default:
        return antonio;
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
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src={getCurrentImage()}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            maxWidth: '95%',
            maxHeight: '95%',
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
            height: '40px',
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
            height: '40px',
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