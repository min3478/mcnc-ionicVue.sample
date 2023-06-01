import { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/ListView.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/DetailView.vue'),
  },
  {
    path: '/list2',
    name: 'List2',
    component: () => import('@/views/ListView2.vue'),
  },
  // query
  {
    path: '/detail2',
    name: 'Detail2',
    component: () => import('@/views/DetailView2.vue'),
    props: true,
  },
  /* // params
  {
    path: '/detail2/:name/:content/:id/:name',
    name: 'Detail2',
    component: () => import('@/views/DetailView2.vue'),
    props: true,
  }, */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
