import InputTask from "./InputTask";
import AddDueDate from "./AddDueDate";
import AddButton from "./AddButton";


function AddTodo() {
  return (
      <div className="addtodo">
       <InputTask></InputTask>
        <AddDueDate></AddDueDate>
        <AddButton></AddButton>
        </div>
   
  );
}
export default AddTodo;
