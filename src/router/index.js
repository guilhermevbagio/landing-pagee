import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import GamesPage from '@/views/GamesPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/games', name: 'Games', component:  GamesPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
