import React from 'react'

const Welcome = (props) => {
    
  return (
    <>
      <div>Hello , {props.name}</div>
      <button onClick={props.addItem}>click</button>
    </>
  )
}

export default Welcome
