import React, { useState } from "react";
import "./Carrousel.css";
import bitmap from "../../assets/bitmap.png";
import bitmap1 from "../../assets/bitmap (1).png";
import bitmap2 from "../../assets/bitmap (2).png";
import icone from "../../assets/icone-coopers.png";

function Carrousel() {
  const imageData = [
    {
      text: 'Organize your daily job enhance your life performance',
      image: bitmap
    },
    {
      text: 'Mark one activity as done makes your brain understands the power of doing.',
      image: bitmap1
    },
    {
      text: 'Careful with missunderstanding the difference between a list of things and a list of desires.',
      image: bitmap2
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Carrousel">
      <div className="carrousel-container">
        <h1 className="goodthings">good things</h1>
        <div className="slides-container">
          {imageData.map((data, index) => (
            <div
              key={index}
              className={
                index === currentIndex ? "slide active" : "slide inactive"
              }
            >
              <div className="card">
                <img src={data.image} alt={data.text} className="card-image" />
                <div className="card-content">
                  <img src={icone} alt="Icon" className="icon" />
                  <p className="text">{data.text}</p>
                  <button className="function">function</button>
                  <p className="readmore">read more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots-container">
          {imageData.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
