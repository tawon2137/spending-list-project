import loginPage from '@/pages/login.vue'
import homePage from '@/pages/home.vue'

export const RouteConfig = class {


  static get() {
    return new RouteConfig;
  }

  constructor() {
    this.NAME_SPACE = {
      'LOGIN': '/login',
      'HOME': '/'
    }

    this.routes = [
      { path: `${this.NAME_SPACE.LOGIN}`, component: loginPage },
      { path: `${this.NAME_SPACE.HOME}`, component: homePage },
      { path: '*', redirect: '/' }
    ]

    this._PUBLIC_URLS = [
      this.NAME_SPACE.LOGIN
    ]
  }


  isPulic(path = '') {
    return this._PUBLIC_URLS.includes(path);
  }
}
