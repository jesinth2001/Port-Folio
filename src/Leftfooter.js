import React from 'react'
import "./css/leftfooter.css"
import {FaLinkedin,FaGithub,FaFacebookSquare,FaInstagram} from "react-icons/fa"

const Leftfooter = () => {
  return (
    <div className='leftfooter'>
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
        <FaFacebookSquare></FaFacebookSquare>
        <FaInstagram></FaInstagram>


    </div>
  )
}

export default Leftfooter