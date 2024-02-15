import React from 'react';
import BG2 from "../../assets/BG2.png";
import "./Section.css"; // Importe seu arquivo CSS para estilização, se necessário

function Section() {
  return (
    <div className="section">
      <div className="image-container">
        <img src={BG2} className="imagem3" alt="Background" />
        </div>
          <h1 className="title-todo">To-do List</h1>
          <div className="line"></div>
          <p className='text-section'>Drag and drop to set your main priorities, check when done and create what´s new.</p>
    </div>
  );
}

export default Section;
