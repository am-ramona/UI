interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
    [key: string]: any
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
  }

type CheckboxProps = {
    label: string
    defaultValue: boolean
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    deleteTodo: (MouseEvent<HTMLFormElement, MouseEvent>)
  }
  