import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:4000'

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/listTodos'
    )
    return todos
  } catch (error) {
    throw error
  }
}

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, '_id'> = {
      name: formData.name,
      description: "empty",
      status: false,
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/createTodo',
      todo
    )
    return saveTodo
  } catch (error) {
    throw error
  }
}

export const updateTodo = async (
  todo: ITodo,
  status: boolean
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, 'status'> = {
      status: status,
    }

    if (status === true) {
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/markTodoCompleted/${todo._id}`,
      todoUpdate
    )
    return updatedTodo
    } else {
      const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
        `${baseUrl}/markTodoUncompleted/${todo._id}`,
        todoUpdate
      )
      return updatedTodo
    }
  } catch (error) {
    throw error
  }
}

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/deleteTodo/${_id}`
    )
    return deletedTodo
  } catch (error) {
    throw error
  }
}
