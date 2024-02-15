import React from 'react';

import Main from './components/Main/Main';
import Section from "./components/Section/Section";
import Todo from './components/ToDo/Todo';
import Carrousel from './components/Carrousel/Carrousel';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

import './style.css';

function App() {

  return (
    <div className="App">
     
      <Main />
      <Section /> 
      <Todo />
      <Carrousel />
      <Form />
      <Footer />


   </div>
  );
}

export default App;
