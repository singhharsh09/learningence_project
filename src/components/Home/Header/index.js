import React from 'react'
import './index.css'
import DropDown from './DropDown'
const Header = () => {
  return (
    <div className='flex jc-sb'>
      <div className='header-heading flex'>
        {/* <div>
            &lt; &nbsp;
        </div> */}
        {/* <div> Basic Mathematics 001</div> */}
        <DropDown/>
      </div>
      <div className='header-right flex jc-sb'>
        <div>
        <svg  xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

           Call Teachers
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

            Support
        </div>
      </div>
    </div>
  )
}

export default Header
