import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
