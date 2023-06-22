import main from '@/containers/main/index';
import NotFound from '@/containers/notfound/index';

const routes = [
  {
    path: '/',
    name: 'main',
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
