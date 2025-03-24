import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import GamesPage from '@/views/GamesPage.vue';
import MusicPage from '@/views/MusicPage.vue';
import CodePage from '@/views/CodePage.vue';
import ArtPage from '@/views/ArtPage.vue';
import ContactPage from '@/views/ContactPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/games', name: 'games', component:  GamesPage},
  { path: '/music', name: 'music', component:  MusicPage},
  { path: '/code', name: 'code', component:  CodePage},
  { path: '/art', name: 'art', component:  ArtPage},
  { path: '/contact', name: 'contact', component:  ContactPage}


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
