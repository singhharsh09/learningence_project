import React from 'react'
import './index.css'
import Videos from './Videos'
import Whiteboard from './Whiteboard'
import Classroom from './Classroom'
import SlideShow from './SlideShow'
import DocCom from './DocCom'
import Documents from './Documents'
const TabContent = ({activeTab}) => {
  return (
    <div className='home-tab-tab_content'>
      {activeTab === 'videos' && <Videos/>}
      {activeTab === 'whiteboard' && <Whiteboard/>}
      {activeTab === 'classroom' && <Classroom/>}
      {activeTab === 'slideshow' && <SlideShow/>}
      {activeTab === 'documents' && <Documents/>}
      {activeTab === 'docCom' && <DocCom/>}
    </div>
  )
}

export default TabContent
