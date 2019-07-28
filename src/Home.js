import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Home extends Component {
  render() {
    return (
      <div className="container double-center">
        <a href="localhost:3000" className="logo">clubhouse</a>
        <h1 className="primary-title">Meet someone, monthly</h1>
        <h3 className="secondary-title">clubhouse is the community for ideators, makers, and creatives.</h3>
        <a href="https://google.com" className="apply">Apply</a>
      </div>
    );
  }
}

export default Home;
