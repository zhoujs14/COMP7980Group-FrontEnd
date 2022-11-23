import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/users/Home.vue'
import MovieDetail from '@/views/users/MovieDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'movie/:id',
        name: 'Movie',
        component: MovieDetail,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
