import '../../App.css';
import MainPage from '../MainPage';
import React from 'react'
import '../MainPage.css';
import Cards from '../Cards';
import Footer from './Footer';


function Home() {
  return (
    <>
    <MainPage />
    <Cards/>
    <Footer/>
    </>
  )
}

export default Home
