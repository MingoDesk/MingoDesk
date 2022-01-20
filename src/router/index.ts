import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppHome from '../views/AppHome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
