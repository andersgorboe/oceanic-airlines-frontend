import main from '@/containers/main/index';
import NotFound from '@/containers/notfound/index';
import Login from "@/containers/login/index";
import NewBooking from "@/containers/newbooking/index";
import SelectBooking from "@/containers/selectbooking/index";

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
    path: '/selectbooking',
    name: 'SelectBooking',
    component: SelectBooking,
    meta: { scrollToTop: true }
  },
  {
    path: '/newbooking',
    name: 'NewBooking',
    component: NewBooking,
    meta: { scrollToTop: true }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Oceanic Airlines - Page not found'
    }
  },
  {
    path: '/abc',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Oceanic Airlines - Page not found'
    }
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
