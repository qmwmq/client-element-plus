import { createRouter, createWebHistory } from 'vue-router'
import { JsonUtils } from 'qmwts'

const modules = import.meta.glob('@/views/**/*.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: '/', component: () => import('@/views/LoginView.vue') },
    { path: '/index', name: 'index', component: () => import('@/views/IndexView.vue') },
  ]
})

export const addRouters = () => {
  const menus = JsonUtils.parseArray<any>(localStorage.getItem('menus'))
  for (let menu of menus) {
    const { path, id } = menu as any
    if (!path || router.hasRoute(id)) continue
    router.addRoute('index', {
      path: '/index/' + path,
      name: id,
      component: modules[`/src/views/${ path }.vue`],
      meta: menu as any
    })
  }
}
addRouters()

export default router