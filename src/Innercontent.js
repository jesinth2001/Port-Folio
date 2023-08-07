import React from 'react'
import "./css/innerconent.css"
import Leftside from "./Leftside"
import Center from "./Center"
import Rightside from "./Rightside"
import Popup from './Popup'

const Innercontent = () => {
  return (
    <div className='innercontent'>
        <Leftside></Leftside>
        <Center></Center>
        <Rightside></Rightside>
        <Popup></Popup>
    </div>
  )
}

export default Innercontent