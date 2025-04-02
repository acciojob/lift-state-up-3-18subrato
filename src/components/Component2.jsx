import React from 'react'

const Component2 = ({setSelectedOption}) => {
  return (
    <div style={{backgroundColor:"yellow"}}>
      <h2>Child Component 2</h2>
      <button onClick={()=>setSelectedOption(2)}>Option 2</button>
    </div>
  )
}

export default Component2
