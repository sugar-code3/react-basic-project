import React from 'react'

const InputTask = ({AddItem}) => {
  return (
    <>
         <div >
          <input type="text" placeholder="Enter Todo here"  ref={AddItem}></input>
        </div>
    </>
  )
}

export default InputTask