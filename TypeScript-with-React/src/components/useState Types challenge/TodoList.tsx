import { useState } from "react";

interface TodoListProps {
    id: number;
    tasks: string,
    completed: boolean;
}
const TodoList = () => {
    const [todo,setTodo] = useState<TodoListProps[]> ([])
    const [value, setValue] = useState<string>('');
  const addTodo = (task: string) => {
    setTodo([...todo, {id:todo.length+1, tasks: task, completed: false }]);// add new todo
  }
  
    return (
    <section>
        <h2>Todo List</h2>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => addTodo(value)}>Add todo</button>

        <ul>
            {todo.map((item) => (
                <li key={item.id}>{item.tasks} {item.completed ? 'Completed' : ''}</li>
            ))}
        </ul>
    </section>
  )
}

export default TodoList