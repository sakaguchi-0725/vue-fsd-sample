import { http } from "@/shared/api"
import { Todo } from "../model/todo"

export const getAllTodos = async (): Promise<Todo[]> => {
  const res: Todo[] = (await http.get('/todos')).data
  return res
}

export const getTodoById = async (id: string): Promise<Todo> => {
  const res: Todo = (await http.get(`/todos/${id}`)).data
  return res
}

export const createTodo = async (todo: Todo) => {
  return await http.post('/todos', todo)
}

export const updateTodo = async (todo: Todo) => {
  return await http.put('/todos', todo)
}

export const deleteTodo = async (id: string) => {
  return await http.delete(`/todos/${id}`)
}

