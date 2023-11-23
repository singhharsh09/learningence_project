import React, { useState } from 'react'

const TeacherDropDown = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value)
    }
    
    return (
      <div>
        
        <label htmlFor="dropdown"></label>
        <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Phone:8840561329</option>
          <option value="option2">email:singhharshkumar0@gmail.com</option>
          
        </select>
        
      </div>
    );
}

export default TeacherDropDown
