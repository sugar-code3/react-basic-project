import { useState } from "react";
import style from "../components/TodoItems.module.css";

import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, settodoitem }) => {
  return (
    <div className={style.items}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          tododate={item.duedate}
          todoName={item.name}
          ondeleteitem={todoItems}
          setchangestate={settodoitem}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
