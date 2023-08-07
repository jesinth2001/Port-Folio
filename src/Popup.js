import React from 'react'
import "./css/popup.css"
import { Link } from 'react-router-dom'
import ValueProvider from './ValueProvider'
import { useContext } from 'react'

const Popup = () => {



const [localstate,setLocalState,nav,setNav]=useContext(ValueProvider)

const handelClick =(e) =>
{
    setNav(e.target.innerText)
    document.getElementById('pop').classList.remove('open-popup')
    document.getElementById("l1").classList.remove("change-line1")
    document.getElementById("l2").classList.remove("change-line2")
    document.getElementById("l3").classList.remove("change-line3")
    setLocalState(0)
 
}

  return (
    <div className='pop-up' id="pop">
        <ul>
            <Link to={"/"} className='tag'onClick={(e)=> handelClick(e) }>
              <li>
                <a>Home</a>
                </li>
                </Link>

                <Link to={"/about"} className='tag'onClick={(e)=>handelClick(e)}> 
              <li>
                <a>About</a>
                </li>
                </Link>

                <Link to={"/academic"} className='tag'onClick={(e)=>handelClick(e)}> 
              <li>
                <a>Academics</a>
                </li>
                </Link>

                <Link to={"/contact"} className='tag'onClick={(e)=>handelClick(e)}> 
              <li>
                <a>Contact</a>
                </li>
                </Link>
          
        </ul>
    </div>
    
  )
}

export default Popup