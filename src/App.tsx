import { useEffect, useState } from 'react'
import './App.css' 
import InputField from './components/InputField'
import TodoList from './components/TodoList';
import { Todo } from './model';

//get data from localstorage
const getLocalItems = () => {
  let todoData = localStorage.getItem('todoData');

  if(todoData){
    return JSON.parse(todoData)
  } else{
    return []
  }
}

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  
  const [todos, setTodos] = useState<Todo[]>(getLocalItems());

  //set data to localstorage
  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todos))
},[todos])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">TODO LIST</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos= {setTodos}/>
      
    </div>
  )
}

export default App
