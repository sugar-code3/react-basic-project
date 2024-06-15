import React from 'react'

const InputTask = ({AddItem , value}) => {
  return (
    <>
         <div >
          <input type="text" placeholder="Enter Todo here" value={value} onChange={AddItem}></input>
        </div>
    </>
  )
}

export default InputTask