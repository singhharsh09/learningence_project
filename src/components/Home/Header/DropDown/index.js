import React, { useState } from 'react'

const DropDown = () => {
  
      const [selectedOption, setSelectedOption] = useState('option1');

const handleDropdownChange = (event) => {
  setSelectedOption(event.target.value)
}

return (
  <div>
    
    <label htmlFor="dropdown">&lt; &nbsp;</label>
    <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
      <option value="option1">Basic Mathematics 001</option>
      <option value="option2">Basic Physics 003</option>
      <option value="option3">C++ </option>
    </select>
    
  </div>
);
   
}

export default DropDown
