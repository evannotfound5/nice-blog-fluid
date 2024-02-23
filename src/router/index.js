import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }, {
      path: '/archive',
      name: 'archive',
      component: () => import('../views/ArchiveView.vue')
    }, {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendView.vue')
    }, {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
