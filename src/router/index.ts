import { createMemoryHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue';
import FavouriteView from '@/views/FavouriteView.vue';
import CataView from '@/views/CataView.vue'

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'home', component: Main },
      { path: '/about', name: 'about', component: FavouriteView },
      { path: '/cart', name: 'profile', component: CataView },
    ],
  })

  export default router;