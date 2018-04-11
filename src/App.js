import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Particle Test</h1>
        <Particles params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#fff",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                backgroundColor: `#000`
              }}/>
      </div>
    );
  }
}

export default App;
