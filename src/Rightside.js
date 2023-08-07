import React from 'react'
import "./css/rightside.css"
import ValueProvider from './ValueProvider'
import { useContext } from 'react'

const Rightside = () => {

  const [localsate, setLocalState,nav,setNav] = useContext(ValueProvider)
  
  const handleNav = () => {
    if(localsate)
    {
      setLocalState(0)
      document.getElementById("l1").classList.remove("change-line1")
      document.getElementById("l2").classList.remove("change-line2")
      document.getElementById("l3").classList.remove("change-line3")
      document.getElementById('pop').classList.remove("open-popup")
    }
    else
    {
      document.getElementById("l1").classList.add("change-line1")
      document.getElementById("l2").classList.add("change-line2")
      document.getElementById("l3").classList.add("change-line3")
      document.getElementById('pop').classList.add("open-popup")
      setLocalState(1)
    }
  }
  return (
    <div className='rightside'>

        <div className='nav-cont'>
            <div className='nav-btn' onClick={handleNav}>
            <span className='line1' id="l1"></span>
            <span className='line2'id="l2"></span>
            <span className='line3' id="l3"></span>
            </div>
           
        </div>
        <div className='page-indicator'>
            <div>{nav}</div></div>
        <div className='settings'></div>
    </div>
  )
}

export default Rightside