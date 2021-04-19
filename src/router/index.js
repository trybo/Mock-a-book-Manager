import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReadBooks from '../views/ReadBooks.vue'
import RandomBook from '../views/RandomBook.vue'
import Book from "../views/Book.vue"
import Author from "../views/Author.vue"

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
