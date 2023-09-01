'use client'

import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";


const Todo=({todo})=>{
    const [isPending,startTransittion]=useTransition();
    return 
    <div 
    className={`border border-black/20 cursor-pointer ${todo.completed ? 'line-through text-gray-900':''}`}
    onClick={()=>startTransittion(()=>completeTodo(todo.id))}>
        {todo.content}
    </div>
};
export default Todo;