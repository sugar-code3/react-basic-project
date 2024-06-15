import React, { useState } from 'react'

const AddDueDate = ({AddDate}) => {

  return (
    <>
    <div>
    <input type="date" ref={AddDate}></input>
  </div>
  </>
  )
}

export default AddDueDate