import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className=' '>
      

      <Routes>
        <Route path='/' element={<HeroSection></HeroSection>}></Route>
        <Route path='/home' element={<HeroSection></HeroSection> &&<Home></Home>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
