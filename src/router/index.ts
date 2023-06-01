import { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from '@ionic/vue-router';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/MainView.vue'),
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
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function (to, from, next) {
  // 로그인되어 있는 경우에 화면 이동 허용
  if (store.getters.isLogin || to.fullPath === '/main') {
    next();
  } else {
    next('/main');
  }
})

export default router
