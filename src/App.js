import React, { Component } from 'react';
// import Login from './Components/Authentication/Login'
import Header from './Containers/Header/Header'
import Main from './Containers/Main/Main'
import Footer from './Containers/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
