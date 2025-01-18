import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          
            <Route path="/" component={Header} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



