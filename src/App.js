import React from 'react';
import Home from './components/Home';
import Apply from './components/Apply';
import Thanks from './components/Thanks';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/apply" component={Apply} />
        <Route path="/thanks" component={Thanks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
