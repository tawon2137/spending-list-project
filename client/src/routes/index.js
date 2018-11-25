import VueRouter from 'vue-router'
import { RouteConfig } from './route.config'

const config = RouteConfig.get();
console.log(config);
const router = new VueRouter({
    routes: config.routes
});





router.beforeEach((to, target, next) => {

  // redirect to login page if not logged in and trying to access a restricted page
  console.log('beforeEach hook : ', to, target);
  const authRequired = !config.isPulic(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next(config.NAME_SPACE.LOGIN);
  }

  next();
})

export default router;
