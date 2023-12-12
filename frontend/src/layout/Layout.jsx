import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Doctors from '../pages/Doctors/Doctors';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Create from '../pages/Doctors/Create';

const Layout = () => {
  return <>
  <Header/>
  <main>
    <Routes>
      <Route path='/main' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/create' element={<Create/>}/>
      
     
    </Routes>
  </main>
  <Footer/>
  </>
};

export default Layout;