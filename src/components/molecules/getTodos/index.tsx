import React from 'react'
import Checkbox from '../../atoms/checkbox'

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (_id: string) => void
}

const GetTodos: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {

  const handleChange = () => {
    updateTodo(todo)
  };

  return (
    <Checkbox label={todo.name} 
              defaultValue={todo.status} 
              onChange={() => handleChange()} 
              deleteTodo={() => deleteTodo(todo._id)} 
    />
  )
}

export default GetTodos
