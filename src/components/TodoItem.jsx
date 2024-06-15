import React from 'react'
import style from "../components/TodoItem.module.css"

    const TodoItem = ({todoName, tododate, ondeleteitem,setchangestate}) => {
    const ondeleteitems = (todoitemnme) => {
      console.log(todoitemnme);
      const newItemlist = ondeleteitem.filter((item) => item.name !== todoitemnme);
      setchangestate(newItemlist);
    };
  return (
        <div className={style.todoitems}>
          <div className={style.itemname}>{todoName}</div>
          <div className={style.itemdate}>{tododate} </div>
          <div className={style.deleteitem}><button type="button" className="btn btn-danger kg-btn " onClick={ () =>ondeleteitems(todoName)}>Delete</button>
          </div>       
          </div>
        );

  
}

export default TodoItem