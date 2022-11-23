import { useEffect, useState } from 'react'
import SearchInput from './components/SearchInput'
import TodoItems from './components/TodoItems'
import { Todo } from './model'
import { addTodosLocalStorage, getTodosItemStorage } from './utils/localStorage'

const App: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const changeInput = (text: string) => {
    setInput(text)
  }

  const handleEditInput = (e: React.FormEvent, input: string, id: number) => {
    e.preventDefault()

    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, title: input } : item
    )

    addTodosLocalStorage(newTodos)
    setTodos(newTodos)
  }

  const handleCompleted = (id: number) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )

    addTodosLocalStorage(newTodos)
    setTodos(newTodos)
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (input) {
      const newTodos = [
        ...todos,
        { id: Date.now(), title: input, completed: false },
      ]

      setTodos(newTodos)
      addTodosLocalStorage(newTodos)
      setInput('')
    }
  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id)

    addTodosLocalStorage(newTodos)
    setTodos(newTodos)
  }

  useEffect(() => {
    setTodos(getTodosItemStorage())
  }, [])

  return (
    <div>
      <div className="mx-auto w-max">
        <div className="flex justify-center mb-5">
          <div className="flex text-4xl text-white">TASKIFY</div>
        </div>

        <SearchInput
          input={input}
          changeInput={changeInput}
          handleAdd={handleAdd}
        />

        <div className="grid grid-cols-3 gap-10">
          {todos.map((item) => (
            <TodoItems
              key={item.id}
              todo={item}
              handleCompleted={handleCompleted}
              handleEditInput={handleEditInput}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
