import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Resume from './components/BuildResume/Resume'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="App">

    <Navbar />
    <Header />
    <Resume />

    </div>

    </Router>

  );
}

export default App;
