import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  
  return (
    <>
      <Header />
      <Hero nombre="Mi tienda" descripcion="Tienda de ropa y accesorios" />
    </>
  )
}

export default App
