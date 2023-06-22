import main from '@/containers/main/index';
import NotFound from '@/containers/notfound/index';
import Login from "@/containers/login/index";
import NewBooking from "@/containers/newbooking/index";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: main,
    meta: { scrollToTop: true }
  },
  {
    path: '/newbooking',
    name: 'NewBooking',
    component: NewBooking,
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
