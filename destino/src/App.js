import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Layout/Header';

import Footer from './components/Layout/Footer';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/slick-carousel/slick/slick.min.js';
import '../node_modules/slick-carousel/slick/slick.scss';
import './App.scss';
import Base from './components/Base';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Offers from './components/Offers/Offers';
import News from './components/News/News';
import Find from './components/Home/Find';
import Top from './components/Home/Top';
import Discount from './components/Home/Discount';
import Video from './components/Home/Video';
import Popular from './components/Home/Popular';
import Subscribe from './components/Home/Subscribe';
import Special from './components/Home/Special';
import BannerA from './components/About/BannerA';
import Fact from './components/About/Fact';

export default function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="news" element={<News/>} />
      <Route path="offers" element={<Offers/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="Base" element={<Base/>} />
      <Route path="find" element={<Find/>} />
      <Route path="top" element={<Top/>} />
      <Route path='discount' element={<Discount/>}/>
      <Route path="video" element={<Video/>} />
      <Route path="popular" element={<Popular/>} />
      <Route path="subscribe" element={<Subscribe/>} />
      <Route path="special" element={<Special/>} />

      <Route path="about" element={<About/>} />
      <Route path='banner' element={<BannerA/>}/>
      <Route path='fact' element={<Fact/>}/> 
    </Routes>
    <Footer/>
  </div>
  )
}

