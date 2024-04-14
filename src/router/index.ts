import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'SearchAlbumView',
          component: () => import('../views/SearchAlbumView.vue')
        },
        {
          path: '/album/:id',
          name: 'AlbumView',
          component: () => import('../views/AlbumView.vue')
        },
        {
          path: '/track/:id',
          name: 'TrackView',
          component: () => import('../views/TrackView.vue')
        }
      ]
    }
  ]
})

export default router
