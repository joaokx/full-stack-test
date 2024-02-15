import React from 'react';
import './Main.css'; 
import imagem from "../../assets/imagem.jpg"
import BG from "../../assets/BG.png"
import BG2 from "../../assets/BG2.png"
import Header from '../Header/Header';
function Main() {
  return (
   
   <div className="main">
   <Header />
    <img src={BG} className="imagem2" alt="Imagem 2" />

      <div className='mockups'>
      <div className=''>
      <h1 className='title-main'>Organize</h1>
      <h2 className='subtitle-main'>your daily jobs</h2>
      <p className='text'>The only way to get things done</p>
      
      <img src={imagem} className="imagem1" alt="Imagem 1" />
      
     
      <div>
     
        <button className='button'>Go to To-Do list</button>
      </div>
     
      </div>
    </div>
         <div className='main-two'>
    
     </div>
 
     </div>
  );
}

export default Main
