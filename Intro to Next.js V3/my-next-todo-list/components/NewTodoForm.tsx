import { newTodo } from "@/utils/actions";
const NewTodoForm=()=>{
    return <div>
        <form action={newTodo}>
            <input name="content" type="text" className="border border-black/25"/>
            <button type="submit" className="rounded-full todo-btn">new Todo</button> 
        </form>
    </div>
};
export default NewTodoForm;