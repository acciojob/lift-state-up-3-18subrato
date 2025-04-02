import React, { useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
const Parent = () => {

  const [selectedOption,setSelectedOption] = useState(false);

  return (
    <div className='parent' style={{backgroundColor:"lightgreen"}}>
      <Component1 
        setSelectedOption={setSelectedOption}
      />
      <Component2
        setSelectedOption={setSelectedOption}
      />
      <p>Selected Option:
       {selectedOption == 1 ? 'Option 1' : selectedOption == 2 ? 'Option 2':''}
      </p>
    </div>
  )
}

export default Parent
