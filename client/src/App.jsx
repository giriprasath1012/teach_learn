
import './App.css'
import Home from './Home'
import About from './About'
import Course from './courses'
import Contact from './Contact'

import Dsa from './courseslist/dsa'
import Python from './courseslist/python'
import Cprogram from './courseslist/cprogram'
import Java from './courseslist/java'
import Cplusplus from './courseslist/cplusplus'
import Javascript from './courseslist/javascript'

import Dsaquiz from './courseslist/quizlist/dsaquiz'
import Pythonquiz from './courseslist/quizlist/pythonquiz'
import Cprogramquiz from './courseslist/quizlist/cprogramquiz'
import Javaquiz from './courseslist/quizlist/javaquiz'
import Cplusplusquiz from './courseslist/quizlist/cplusplusquiz'
import Javascriptquiz from './courseslist/quizlist/javascriptquiz'


import Login from './Login'
import Register from './Register'

import React, { useState } from 'react';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {

  

 
  return (
    <>

    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Course />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/courses/dsa' element={<Dsa />} />
          <Route path='/courses/python' element={<Python />} />
          <Route path='/courses/cprogram' element={<Cprogram />} />
          <Route path='/courses/java' element={<Java />} />
          <Route path='/courses/cplusplus' element={<Cplusplus />} />
          <Route path='/courses/javascript' element={<Javascript />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        
          <Route path='/courses/dsa/quiz' element={<Dsaquiz  />} />
          <Route path='/courses/python/quiz' element={<Pythonquiz  />} />
          <Route path='/courses/cprogram/quiz' element={<Cprogramquiz  />} />
          <Route path='/courses/java/quiz' element={<Javaquiz  />} />
          <Route path='/courses/cplusplus/quiz' element={<Cplusplusquiz />} />
          <Route path='/courses/javascript/quiz' element={<Javascriptquiz  />} />
          
        </Routes>

      </Router>
    
    
      
      
    </>
  )
 
}

export default App
