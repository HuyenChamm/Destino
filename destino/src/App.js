import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Layout/Header';
import Home from './components/Home';
import Footer from './components/Layout/Footer';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/slick-carousel/slick/slick.min.js';
import '../node_modules/slick-carousel/slick/slick.scss';
import './App.scss';
import Base from './components/Base';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="About" element={<About/>} /> */}
      <Route path="Base" element={<Base/>} />
    </Routes>
    <Footer/>
  </div>
  )
}

