import React from 'react';
import { render } from 'react-dom';
import './style.css';
//import components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Detail from './components/Detail/Detail';
//import Router components
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  
  return (

    <div className="container">
      <Header title={'notice board'} description={'Need some inspiration? 💡 Take a look at what we have for you.'} />
      <Main />
    </div>
  
)};

render(
  <BrowserRouter>
    <Routes>
        <Route path="detail" element={<Detail />} />
        <Route path="/" element={<App />} />
        
    </Routes>
  </BrowserRouter>, 
  document.querySelector('#app'));
