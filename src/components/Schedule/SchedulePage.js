import React, { Component } from 'react';
import Header from '../Header/Header/Header'
import Schedule from './Schedule'

class SchedulePage extends Component {
  render() {
    return (
      <div className="SchedulePage">
        <Header></Header>
        <Schedule></Schedule>
      </div>
    );
  }
}

export default SchedulePage;
