import { createRouter, createWebHistory } from 'vue-router'
import Home from './page/Home.vue'
import About from './page/About.vue'
import Detail from './page/Detail.vue'
import Item from './page/Item.vue'
import ToDo from './page/ToDo.vue'
import User from './page/User.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/todo', component: ToDo },
  { path: '/user', component: User },
  { path: '/detail', component: Detail, 
     children: [
      {
        path: ':id',
        component: Item
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router