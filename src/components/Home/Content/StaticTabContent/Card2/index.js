import React from 'react'
import MyImage from './MyImage/TeacherImg.jpg'
import './index.css'

const Card2 = () => {
  return (
    <div className=' image-container'>
      <img src={MyImage} style={{width: '18rem', height: '12.44rem', borderRadius:'20px'}} alt="Description of the image" />
      <div className="text-overlay">
        <p className="name">Harsh Kumar Singh</p>
      </div>
      
    </div>
  )
}

export default Card2
