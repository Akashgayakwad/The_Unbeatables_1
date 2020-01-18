import React, { Component } from 'react';
// import Login from './Components/Authentication/Login'
import Header from './Containers/Header/Header';
import Main from './Containers/Main/Main';
import Chatbot from './Containers/Chatbot/Chatbot';
import Footer from './Containers/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header/>
        <Main/>
        <Chatbot/>
        <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
