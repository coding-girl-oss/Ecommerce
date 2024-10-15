import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Products/>}/>
     <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App




