import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/index'

import '../src/style/styles/reset.css';
import '../src/style/styles/home.css';
import '../src/style/styles/home-pad.css';
import '../src/style/styles/home-phone.css';

import {
  BrowserRouter as Router,
  
} from 'react-router-dom';

import React from'react';

function App() {

  


  
  return (
    <>
    <Router>
     
  

	<Index />

      </Router>  
    </>
  );

  
}



export default App;
