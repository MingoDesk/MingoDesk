import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppHome from '../views/AppHome.vue';
import ClosedTickets from '../views/ClosedTickets.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppHome,
  },
  {
    path: '/YourTickets',
    component: AppHome,
  },
  {
    path: '/ClosedTickets',
    component: ClosedTickets,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
