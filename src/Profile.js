import React from 'react'
import "./css/profile.css"


const Profile = () => {
  return (
    <div className='profile'>
        <div className='image-cont'>
            <div className='img'></div>
        </div>
        <div className='text-box'>
            <h3>Jesinth Kumar</h3>
            <h3>Front-end Developer,<span>UI/UX Designer</span></h3>
           
        </div>
    </div>
  )
}

export default Profile