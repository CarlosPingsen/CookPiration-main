import React, { useState } from 'react';
import HalamanSebelumLogin from './page/HalamanSebelumLogin'
import HalamanUtamaSesudahLogin from './page/HalamanUtamaSesudahLogin'
import Register from './page/Register'
import Login from './page/Login'
import HalamanArtikel from './page/HalamanArtikel'
import HalamanDetailArtikel from './page/HalamanDetailArtikel'
import HalamanResep from './page/HalamanResep'
import HalamanDetailResep from './page/HalamanDetailResep'
import HalamanProfile from './page/HalamanProfile'
import HalamanAccountLain from './page/HalamanAccountLain'
import HalamanPencarian from './page/HalamanPencarian'
import NavbarSebelumLogin from './components/NavbarSebelumLogin'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavbarSesudahLogin from './components/NavbarSesudahLogin';

// komponen
function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HalamanSebelumLogin/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="halamanUtamaSesudahLogin" element={<HalamanUtamaSesudahLogin/>} />
          <Route path="halamanResep" element={<HalamanResep/>} />
          <Route path="halamanDetailResep" element={<HalamanDetailResep/>} />
          <Route path="halamanArtikel" element={<HalamanArtikel/>} />
          <Route path="halamanDetailArtikel" element={<HalamanDetailArtikel/>} />
          <Route path="halamanProfile" element={<HalamanProfile/>} />
          <Route path="halamanAccountLain" element={<HalamanAccountLain/>} />
          <Route path="halamanPencarian" element={<HalamanPencarian/>} />
          <Route exact path="/:idMeal" element={<HalamanDetailResep/>}/>
          <Route path="Navbarsesudahlogin" element={<NavbarSesudahLogin/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App