import React,{Component} from 'react';
import {Provider} from 'react-redux'
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom'

const store = ConfigureStore();
const App=(props)=> {

  
  
  
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div>
      <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );

}

export default App;
