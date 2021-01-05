import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Footer />
      </div>
    );
  }
}

export default App;