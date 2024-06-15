import React, { useState } from 'react'

const AddDueDate = ({AddDate,value}) => {

  return (
    <>
    <div>
    <input type="date"  value={value} onChange={AddDate}></input>
  </div>
  </>
  )
}

export default AddDueDate