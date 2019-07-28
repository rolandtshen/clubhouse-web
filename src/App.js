import React from 'react';
import Home from './components/Home'
import Apply from './components/Apply'
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/apply" component={Apply} />
      </div>
    </BrowserRouter>
  );
}

export default App;
