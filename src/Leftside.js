import React from 'react'
import "./css/leftside.css"
import Profile from './Profile'
import Details from './Details'
import Leftfooter from './Leftfooter'

const Leftside = () => {
  return (
    <div className='leftside'>
       <Profile></Profile>
       <Details></Details>
       <Leftfooter></Leftfooter>
    </div>
  )
}

export default Leftside