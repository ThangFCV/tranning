import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Detail from './pages/Detail.vue'
import Item from './pages/Item.vue'
import ToDo from './pages/ToDo.vue'
import User from './pages/User.vue'
import UserDetail from './pages/UserDetail.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import UserLayout from './layouts/UserLayout.vue'

const routes = [
  { path: '/', component: HomeLayout, // layout home
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
   { path: '/user', component: UserLayout, //layout user
    children:[
      {path: '', component: User,
        // children:[
        //   {
        //     path: ':id',
        //   }
        // ]
      },
      {path:'/user/:id',component: UserDetail}
    ]
   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router