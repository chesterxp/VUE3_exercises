import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/Products.vue'
import PastOrdersView from '../views/PastOrders.vue'
import HomeView from '../views/Home.vue'
import CounterView from '../views/Counter.vue'
import NotesView from '../views/Notes.vue'
import QuizesView from '../views/Quizes/Quizes.vue'
import QuizView from '../views/Quizes/Quiz2.vue'
// import AboutView from "../views/About.vue";

import CarView from '@/views/Car.vue'
import ContactView from '@/views/Contact.vue'
import CarsView from '@/views/Cars.vue'
import PageOntFound from '@/views/404.vue'
import AnimationView from '@/views/Animation.vue'
import MoviesView from '@/views/Movies.vue'
import Movies2View from '@/views/Movies2.vue'
import PartyView from '@/views/Party.vue'
import StateView from '@/views/State.vue'


const routes = [
  // 404
  {
    path: '/:catchall(.*)*',
    name: 'Page Not Found',
    component: PageOntFound
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/past-orders',
    name: 'past-orders',
    component: PastOrdersView
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  },
  {
    path: '/cars/:id',
    name: 'carsId',
    component: CarView,
    children: [
      {
        path: 'contact',
        name: 'contact',
        component: ContactView
      }
    ]
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView
  },
  {
    path: '/quizes',
    name: 'quizes',
    component: QuizesView
  },
  {
    path: '/quizes/:id',
    name: 'quiz',
    component: QuizView
  },
  {
    path: '/animation',
    name: 'animation',
    component: AnimationView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/movies2',
    name: 'movies2',
    component: Movies2View
  },
  {
    path: '/state',
    name: 'state',
    component: StateView
  },
  {
    path: '/party',
    name: 'party',
    component: PartyView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  }

  // {
  //   path: '/quizes',
  //   name: 'quizes',
  //   component: QuizesView
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
