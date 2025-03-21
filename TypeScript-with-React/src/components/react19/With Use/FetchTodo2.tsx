import {use} from 'react';
const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
}

const FetchTodo2 = () => {
    const data = use(fetchData());
  return (
    <div>
      {data.title}
    </div>
  )
}

export default FetchTodo2
