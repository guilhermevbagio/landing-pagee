import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import GamesPage from '@/views/GamesPage.vue';
import MusicPage from '@/views/MusicPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/games', name: 'Games', component:  GamesPage},
  { path: '/music', name: 'Music', component:  MusicPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
