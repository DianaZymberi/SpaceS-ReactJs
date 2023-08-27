import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Services' exact Component={Services} />
          <Route path='/AboutUs' exact Component={AboutUs} />
          <Route path='/ContactUs' exact Component={ContactUs} />
          <Route path='/SignUp' exact Component={SignUp} />
        </Routes> 
      </Router>
    </>

  );
}

export default App;
