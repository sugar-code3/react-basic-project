import React from 'react'
import style from "../components/TodoItem.module.css"

const TodoItem = ({todoName, tododate}) => {
  return (
        <div className={style.todoitems}>
          <div className={style.itemname}>{todoName}</div>
          <div className={style.itemdate}>{tododate} </div>
          <div className={style.deleteitem}><button type="button" className="btn btn-danger kg-btn ">Delete</button>
          </div>       
          </div>
        );

  
}

export default TodoItem