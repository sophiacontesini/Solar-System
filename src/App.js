import React from 'react';
import SolarSystem from './components/SolarSystem';
import Header from './components/Header';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
