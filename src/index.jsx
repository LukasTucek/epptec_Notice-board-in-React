import React from 'react';
import { render } from 'react-dom';
import './style.css';
//import components
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => (
  
  <div className="container">

    <Header title={'notice board'} />
    <Main />

  </div>
  

);

render(<App />, document.querySelector('#app'));
