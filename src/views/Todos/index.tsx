import React, { useEffect, useState } from 'react'
import { TodoIcon } from '../../assets/icons';
import AddTodo from '../../components/molecules/addTodo'
import GetTodos from '../../components/molecules/getTodos'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../network/APIs'
import './todos.sass';

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [isActive, setIsActive] = useState<any>('all')
    const links = ['all', 'completed', 'incompleted']

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = (): void => {
        getTodos()
            .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
            .catch((err: Error) => console.log(err))
    }

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
        e.preventDefault()
        addTodo(formData)
            .then(({ status, data }) => {
                if (status !== 201) {
                    throw new Error('Error! Todo not saved')
                }
                setTodos(data.todos)
            })
            .catch((err) => console.log(err))
    }

    const handleUpdateTodo = (todo: ITodo): void => {
        updateTodo(todo, !todo.status)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Error! Todo not updated')
                }
                filterByStatus(isActive)
            })
            .catch((err) => console.log(err))
    }

    const handleDeleteTodo = (_id: string): void => {
        deleteTodo(_id)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Error! Todo not deleted')
                }
                filterByStatus(isActive)
            })
            .catch((err) => console.log(err))
    }

    const filterByStatus = async (status: string): Promise<void> => {
        setIsActive(status)
        getTodos()
            .then(({ data: { todos } }: ITodo[] | any) => {
                setTodos(todos);
                if (status === 'all') { return; }
                const todosCopy = [...todos]
                const filteredTodos = todosCopy.filter(todo => todo.status === (status === 'completed') ? true : false)
                setTodos(filteredTodos)
            })
            .catch((err: Error) => console.log(err))
    }

    return (
        <section id="todoList" className='wrapper'>
            <span className="logo"><TodoIcon /></span>
            <h2 className="title">Todo List</h2>
            <AddTodo saveTodo={handleSaveTodo} />
            <section className="itemsList">
                {todos.map((todo: ITodo) => (
                    <GetTodos
                        key={todo._id}
                        updateTodo={handleUpdateTodo}
                        deleteTodo={handleDeleteTodo}
                        todo={todo}
                    />
                ))}
            </section>
            <section className="filteringOptions">
                <span className='tag'>Show</span>
                <span className='options'>
                    {links.map((link, index) => (
                        <button key={index} className={`${link} ${isActive === link && 'active'}`} onClick={() => filterByStatus(`${link}`)}>{link}</button>
                    ))}
                </span>
            </section>
        </section>
    )
}

export default Todos