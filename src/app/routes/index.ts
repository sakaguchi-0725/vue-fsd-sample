import { createRouter, createWebHistory } from "vue-router"
import { TodoListPage } from "@/pages/todo-list"
import { DefaultLayout } from "../layouts"
import { InternalServerError, NotFoundError } from "@/pages/errors"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'todo',
          name: 'todo-list',
          component: TodoListPage
        },
      ]
    },
    {
      path: '/error',
      component: DefaultLayout,
      children: [
        {
          path: '404',
          component: NotFoundError
        },
        {
          path: '500',
          component: InternalServerError
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/error/404'
    }
  ]
})

export default router