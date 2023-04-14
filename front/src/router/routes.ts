import { RouteRecordRaw } from 'vue-router';
import User from '../layouts/User.vue';
import Profile from '../pages/Profile.vue';
import About from '../pages/About.vue';
import News from '../pages/News.vue';
import Entreprise from '../pages/Entreprise.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: User,
    children: [
      { path: 'profile', component: Profile },
      { path: 'about', component: About },
      { path: 'news', component: News },
      { path: 'entreprise', component: Entreprise },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
