import React from 'react'

const TodoItem = ({todoName, tododate}) => {
  return (
        <div className='todoitems'>
          <div className='itemname'>{todoName}</div>
          <div className='itemdate'>{tododate} </div>
          <div className='deleteitem'><button type="button" className="btn btn-danger kg-btn ">Delete</button>
          </div>       
          </div>
        );

  
}

export default TodoItem