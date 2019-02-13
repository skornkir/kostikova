import React, { Component } from 'react';
import Header from './components/Header/Header'
import Content from './components/Content'
import 'react-notifications/lib/notifications.css'

import './scss/header.scss'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default App;
