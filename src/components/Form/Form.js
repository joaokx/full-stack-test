import React from 'react';
import './Form.css';
import Tatiana from "../../assets/tatiana.png";
import iconemail from "../../assets/icon-mail.png";
import Grafismo from "../../assets/grafismo.png";

function Form() {
  return (
    <div className="form">
      <div className="circleImage">
        <img src={Tatiana} alt="Sua imagem" />
      </div>
      <div className="grafismo">
        <img src={Grafismo} alt="Sua imagem" />
      </div>
      <img src={iconemail} alt="Seu ícone" className="emailIcon" />
      <div className="getInTouchText">
        GET IN TOUCH
      </div>
      <div className="nameLabel">
        Your name
      </div>
      <input type="text" placeholder='type your name here...' className="nameInput" />
      <div className="emailLabel">
        Email*
      </div>
      <input type="text" placeholder='example@example.com' className="emailInput" />
      <div className="telephoneLabel">
        Telephone*
      </div>
      <input type="text" placeholder='(  ) ____-____' className="telephoneInput" />
      <div className="messageLabel">
        Message*
      </div>
      <input type="text" placeholder='Type what you want to say to us' className="messageInput" />
      <button className="sendButton">Send now</button>
    </div>
  );
}

export default Form;
