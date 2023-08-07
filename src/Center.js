import React from 'react'
import "./css/center.css"
import Home from './Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Academic from './Academic'
import Contact from './Contact'
import About from './About'
const Center = () => {
  return (
    <div className='center'>
         <Routes>
       <Route path='/' element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path='/academic' element={<Academic></Academic>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      
     </Routes>
    </div>
  )
}

export default Center