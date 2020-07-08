import React,{Component} from 'react';

import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
const App=(props)=> {

  
  
  
  return (
    <BrowserRouter>
    <div>
      <Main/>
    </div>
    </BrowserRouter>
  );

}

export default App;
