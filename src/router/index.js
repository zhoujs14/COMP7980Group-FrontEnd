import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/user/Home.vue'
import MovieDetail from '@/views/user/MovieDetail.vue'
import CategoryDetail from '@/views/user/CategoryDetail.vue'
import Search from '@/views/user/Search'
import AdminHome from '@/views/admin/Home'

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
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminHome,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
