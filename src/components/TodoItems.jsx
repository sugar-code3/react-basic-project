

import TodoItem from "../TodoItem";
const TodoItems=({todoItems})=>{
    return(
        <div className="items">
        {
            todoItems.map(item=>
                <TodoItem tododate={item.date}  todoName={item.Name}>
                </TodoItem>
            )
        }
        </div>
   
    );
};
export default TodoItems;