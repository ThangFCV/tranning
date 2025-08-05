import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Detail from './Detail.vue'
import Item from './Item.vue'
import ToDo from './ToDo.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/todo', component: ToDo },
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