import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
