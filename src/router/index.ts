import { createMemoryHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue';
import FavouriteView from '@/views/FavouriteView.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/fave', component: FavouriteView }
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router;