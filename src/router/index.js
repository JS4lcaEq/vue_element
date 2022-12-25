import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{head: "Navigator", descr: "Element Plus can run on browsers that support ES2018 and ResizeObserver. If you really need to support outdated browsers, please add Babel and Polyfill yourself."}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta:{head: "About", descr: "Element Plus can run on browsers that support ES2018 and ResizeObserver. If you really need to support outdated browsers, please add Babel and Polyfill yourself."}
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/Page1.vue'),
      meta:{head: "Page 1", descr: "Element Plus can run on browsers that support ES2018 and ResizeObserver. If you really need to support outdated browsers, please add Babel and Polyfill yourself."}
    },
    {
      path: '/navigator',
      name: 'navigator',
      component: () => import('../views/NavigatorView.vue'),
      meta:{head: "Navigator powered by cards", descr: "Element Plus can run on browsers that support ES2018 and ResizeObserver. If you really need to support outdated browsers, please add Babel and Polyfill yourself."}
    },
    {
      path: '/navigatorCollapse',
      name: 'navigatorCollapse',
      component: () => import('../views/NavigatorViewCollapse.vue'),
      meta:{head: "Navigator powered by collapse", descr: "Element Plus can run on browsers that support ES2018 and ResizeObserver. If you really need to support outdated browsers, please add Babel and Polyfill yourself."}
    }
  ]
})

export default router
