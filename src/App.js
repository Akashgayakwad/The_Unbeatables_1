import React, { Component } from 'react';
import { StyleReset } from 'atomize';
import Login from './Components/Authentication/Login'

class App extends Component {
  render() {
    return (
      <div>
        <StyleReset />
        <Login/>
      </div>
    );
  }
}

export default App;
