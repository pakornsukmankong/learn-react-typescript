import { TODOS_DATA } from '../constant/constant'
import { Todo } from '../model'

export const getTodosItemStorage = () => {
  const data = localStorage.getItem(TODOS_DATA)

  return JSON.parse(data || '')
}

export const addTodosLocalStorage = (data: Todo[]) => {
  const newData = JSON.stringify(data)

  return localStorage.setItem(TODOS_DATA, newData)
}
