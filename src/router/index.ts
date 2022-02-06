import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppHome from '../views/AppHome.vue';
import YourTickets from '../views/YourTickets.vue';
import ClosedTickets from '../views/ClosedTickets.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: AppHome,
  },
  {
    path: '/home',
    name: 'home',
    component: YourTickets,
  },
  {
    path: '/closed',
    name: 'closed',
    component: ClosedTickets,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
