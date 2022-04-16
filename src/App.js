import React, { useState } from 'react'
import Loginpage from './Loginpage';
import Seconpage from './Seconpage';
import { BrowserRouter as Router, Route, Routes, Link, useHistory  } from 'react-router-dom';
export default function App() {





  return (
    <>

      {/* <Loginpage style={{backgroundColor:"#091422"}}/> */}
      {/* <Seconpage/> */}
      <Router>
      <Routes>
        <Route path='/' element ={<Loginpage/>}/>
        <Route path='/Seconpage' element={<Seconpage/>} />
        </Routes>
      </Router>

    </>
  )
}
