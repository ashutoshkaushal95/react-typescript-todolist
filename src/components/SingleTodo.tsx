import React from 'react'
import { Todo } from '../model'
import { MdModeEdit, MdDelete, MdDone } from 'react-icons/md'
import './styles.css'

type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <form className='todos__single'>
        <span className="todos__single--text">{todo.todo}</span>
        <div>
            <span className="icon"><MdModeEdit /></span>
            <span className="icon"><MdDelete /></span>
            <span className="icon"><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo