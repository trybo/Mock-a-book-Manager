import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReadBooks from '../views/ReadBooks.vue'
import RandomBook from '../views/RandomBook.vue'
import Book from "../views/Book.vue"
import Author from "../views/Author.vue"
import ChartContainer from "../views/ChartContainer.vue"
import LineChartContainer from "../views/LineChartContainer.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/readbooks',
    name: 'ReadBooks',
    component: ReadBooks
  },
  {
    path: '/randombook',
    name: 'RandomBook',
    component: RandomBook
  },
  {
    path: '/Book',
    name: 'Book',
    component: Book
  },
  {
    path: '/Author',
    name: 'Author',
    component: Author
  },
  {
    path: '/Chart',
    name: 'Chart',
    component: ChartContainer
  },
  {
    path: '/LineChart',
    name: 'Linechart',
    component: LineChartContainer
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
