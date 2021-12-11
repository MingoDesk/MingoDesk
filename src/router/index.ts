import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import AppHome from '../views/AppHome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: AppHome,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
