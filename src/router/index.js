import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/users/Home.vue'
import MovieDetail from '@/views/users/MovieDetail.vue'
import CategoryDetail from '@/views/users/CategoryDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: MovieDetail,
  },
  {
    path: '/category/:name',
    name: 'CategoryDetail',
    component: CategoryDetail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
