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
  Link,
} from "react-router-dom";

const App = () => {
  
  return (

    
  <div className="container">


    <header>
	    zde bude později menu
    </header>

    <Header title={'notice board'} />
    <Main />








   {/* <Detail /> */}

   {/* 
   Využití React Routeru na "přepínání" detailu (obsahu)? 
   Umí aplikaci vrátit na obsah, na který má adresa ukazovat.
   Aplikace by nám běžela např. na www.noticeboard.cz. 
   Po kliknutí na detail příspěvku by se zobrazila nová stránka např. www.noticeboard.cz/posts/3 
   */}




  </div>
  

  )};

render(<App />, document.querySelector('#app'));
