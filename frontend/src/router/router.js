
import {createRouter, createWebHistory} from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import CreateListing from '../views/CreateListing.vue';
import ProfilePage from '../views/PersonalProfile.vue';
import Login from '../views/Login.vue';


const routes = [
      {
        path: '/:skills?/:vacancy?/:dept?/:roleName?',
        name: 'LandingPage',
        component: LandingPage,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/create',
        name: 'CreatePage',
        component: CreateListing,
      },
      {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage,
      },
    ]

const router = createRouter({
    history: createWebHistory('/Scrumptious'),
  routes,
});

export default router;