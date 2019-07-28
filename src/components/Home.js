import React, { Component } from 'react';
import man from '../assets/man.png';
import woman from '../assets/woman.png';

class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-illustration" id="right">
          <img src={woman} />
        </div>
        <div className="hero-illustration" id="left">
          <img src={man} />
        </div>
        <div className="hero-wrapper">
          <a href="#" className="logo">clubhouse</a>
          <h1 className="hero-title">Meet someone, every month</h1>
          <h3 className="hero-subtitle">clubhouse is the community for ideators, makers, and creatives.</h3>
          <a href="/apply" className="apply">Apply</a>
        </div>
      </div>
    );
  }
}

export default Home;
