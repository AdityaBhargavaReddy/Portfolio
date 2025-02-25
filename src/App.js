import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm'

class App extends Component {
  render() {
    return (
    
      <BrowserRouter >
        <Header/>
        <Routes>
       
          <Route exact path="/contact" element={<ContactForm />} />
          <Route exact path="/" element={<Home />} />      
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/experience" element={<Experience />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
