import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from) {
    // always scroll to top
    if (from.path !== to.path) {
      return { top: 0 }
    }
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
      path: '/aboutTheProject',
      name: 'aboutTheProject',
      component: () => import('../views/AboutTheProject.vue')
    },
    {
      path: '/aboutOurReviewers',
      name: 'aboutOurReviewers',
      component: () => import('../views/AboutOurReviewers.vue')
    },
    {
      path: '/articles/:article',
      name: 'Articles',
      component: () => import('../components/ArticlePage.vue')
    }
  ]
})

export default router
