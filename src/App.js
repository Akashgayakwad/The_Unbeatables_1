import React, { Component } from 'react';
import { StyleReset } from 'atomize';
import Login from './Components/Authentication/Login'
import Header from './Containers/Header/Header'
import Main from './Containers/Main/Main'
import Footer from './Containers/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <StyleReset/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

export default App;
