import { useState } from 'react'

interface Props {
  key: number
  todo: {
    id: number
    title: string
    completed: boolean
  }
  handleCompleted: (id: number) => void
  handleEditInput: (e: React.FormEvent, input: string, id: number) => void
  handleDelete: (id: number) => void
}

const TodoItems: React.FC<Props> = ({
  todo,
  handleCompleted,
  handleEditInput,
  handleDelete,
}: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [input, setInput] = useState<string>(todo.title)

  return (
    <div className="flex justify-between w-[15rem] items-center border-2 p-4 rounded-lg bg-slate-300">
      {!isEdit ? (
        <div
          className={`text-md font-bold ${
            todo.completed ? 'line-through' : ''
          } `}>
          {todo.title}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            handleEditInput(e, input, todo.id)
            setIsEdit(false)
          }}>
          <input
            className="w-[8rem] rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      )}

      <div>
        <div className="flex gap-2 justify-center items-center">
          <i
            className="fa-solid fa-pen-to-square hover:text-white "
            onClick={() => setIsEdit((prev) => !prev)}
          />
          <i
            className="fa-solid fa-trash hover:text-white"
            onClick={() => handleDelete(todo.id)}
          />
          <i
            className="fa-solid fa-check hover:text-white"
            onClick={() => handleCompleted(todo.id)}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoItems
