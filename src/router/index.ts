import { createMemoryHistory, createRouter } from 'vue-router'
import FavouriteView from '@/views/FavouriteView.vue';

const routes = [
    { path: '/', component: FavouriteView }
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router;