import { createMemoryHistory, createRouter } from 'vue-router'
import Cataview from '@/views/Cataview.vue';
import Main from '@/views/Main.vue';
import FavouriteView from '@/views/FavouriteView.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/about', component: Cataview },
    { path: '/fave', component: FavouriteView }
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router;