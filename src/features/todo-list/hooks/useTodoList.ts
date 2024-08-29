import { getAllTodos } from "@/entities/todo/api"
import { Todo } from "@/entities/todo/model/todo"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"

export const useTodoList = () => {
  const router = useRouter()
  const todos = ref<Todo[]>([])

  onMounted(async () => {
    todos.value = await getAllTodos()
  })

  const toEditPage = (id: number) => {
    router.push({ name: 'todo-edit-form', query: { id: id } })
  }

  return {
    todos,
    toEditPage
  }
}