import { createMemoryHistory, createRouter } from 'vue-router'
import CartView from '@/views/CartView.vue';
import ProductView from '@/views/ProductView.vue';
import FavouriteView from '@/views/FavouriteView.vue';

const routes = [
    { path: '/', component: ProductView },
    { path: '/about', component: CartView },
    { path: '/fave', component: FavouriteView }
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router;