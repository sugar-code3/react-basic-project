import style from "../components/TodoItems.module.css"

import TodoItem from "./TodoItem";
const TodoItems=({todoItems})=>{
    return(
        <div className={style.items}>
        {
            todoItems.map((item,index)=>
                <TodoItem key={index} tododate={item.duedate}  todoName={item.name}>
                </TodoItem>
            )
        }
        </div>
   
    );
};
export default TodoItems;