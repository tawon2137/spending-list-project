import loginPage from '@/pages/login.vue'

export const namespace = {
  'LOGIN': '/login'
}

export const routes = [
  { path: `${namespace.LOGIN}`, component: loginPage },
]

