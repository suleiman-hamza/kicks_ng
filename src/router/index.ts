import { createMemoryHistory, createRouter } from 'vue-router'
import CartView from '@/Views/CartView.vue'
import ProductView from '@/Views/ProductView.vue'
import FavouriteView from '@/Views/FavouriteView.vue'

const routes = [
    { path: '/', component: ProductView },
    { path: '/about', component: CartView },
    { path: '/fave', component: FavouriteView }
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router