import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/articles/:article',
      name: 'Articles',
      component: () => import('../components/ArticlePage.vue')
    }
  ]
})

export default router
