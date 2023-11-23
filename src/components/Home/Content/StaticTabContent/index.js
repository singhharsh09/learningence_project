import React from 'react'
import './index.css'
import Card1 from './Card1'
import Icons from './Icons'
import Card2 from './Card2'
const StaticTabContent = () => {
  return (
    <div className='home-tab-static_tab_content '>
    
   
   <div className='static_content'><Card1/></div>
   <div className='static_content'><Card2/></div>
  <Icons/>


      
    </div>
  )
}

export default StaticTabContent
