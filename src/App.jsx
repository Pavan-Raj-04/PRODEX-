import React from 'react'
import './app.css'
import './assets/style/style.css'
import { Router, Routes, Route } from 'react-router-dom'
import Landingpage from './Components/Landingpage'
import Header from './Components/Header'
import Viewmore from './Components/Viewmore'
import Cartitems from './Components/Cartitems'


const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route element={<Landingpage/>} path='/' />
        <Route element={<Viewmore/>} path='/viewmore/:id' />
        <Route element={<Cartitems/>} path='/cart/'/>
        <Route element={<h2 style={{color:'red', fontWeight:'bold',fontSize:'100px', }}>PageNotFound</h2>} path='/*' />
      </Routes>
    </>
  )
}

export default App
