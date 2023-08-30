import TodoList from '@/components/TodoList';
import db from '@/utils/db'

const getData=async()=>{
const todos=await db.todo.findMany({});
return todos
}

const TodosPage=async()=>{
    await new Promise((resolve)=> setTimeout(()=> resolve(),2000))
    const todos=await getData();
    return(
        <div>
            <TodoList todos={todos}/>
        </div>
    )
}
export default TodosPage;