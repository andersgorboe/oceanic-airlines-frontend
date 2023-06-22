import main from '@/containers/main/index';
import NotFound from '@/containers/notfound/index';
import Login from "@/containers/login/index";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: main,
    meta: { scrollToTop: true }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Oceanic Airlines - Page not found'
    }
  }
];

export default routes;