import React, { useState } from 'react'

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | { [key: string]: any }>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value.charAt(0).toUpperCase() + e.currentTarget.value.slice(1),
    })
  }

  return (
    <form className='newItem'>
      <input type='text'
        id="name"
        placeholder="Add a new todo"
        onChange={handleForm}
        value={formData?.name || ''}
        onKeyPress={(e) => e.key === 'Enter' && saveTodo(e, formData)}
      />
    </form>
  )
}

export default AddTodo
