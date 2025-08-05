import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Detail from './pages/Detail.vue'
import Item from './pages/Item.vue'
import ToDo from './pages/ToDo.vue'
import User from './pages/User.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import UserLayout from './layouts/UserLayout.vue'

const routes = [
  { path: '/', component: HomeLayout,
    children:[
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'todo', component: ToDo },
      { path: 'detail', component: Detail, 
         children: [
          {
            path: ':id',
            component: Item
          }
        ]
      },
    ]
   },
   { path: '/user', component: UserLayout,
    children:[
      {path: '', component: User}
    ]
   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router