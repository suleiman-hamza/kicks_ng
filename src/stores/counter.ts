import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { Toaster, toast } from 'vue-sonner'

interface CartItem {
  name: string,
  price?: number,
  quantity: number,
}

interface Favourite {
  name?: string,
  src?: string,
  price?: number,
  isFavourite?: boolean
}

export const useCounterStore = defineStore('counter', () => {
  const products = reactive([
    {name: 'Nike', price: 200, src: '/src/assets/images/DD1869-103.webp', isFavourite: true},
    {name: 'Dior', price: 280, src: '/src/assets/images/louis-vuitton-nike-air-force-1-low-by-virgil-abloh-white-green_1.webp',isFavourite: false},
    {name: 'Jordan', price: 100, src: '/src/assets/images/U574LGIL.webp', isFavourite: false},
    {name: 'Reebok', price: 250, src: '/src/assets/images/Addidas-Yeezy-Boost.webp', isFavourite: false},
    {name: 'Timberland', price: 600, src: '/src/assets/images/adidas-yeezy-boost-350-v2-jade-ash.webp', isFavourite: false},
    {name: 'Louis V', price: 1400, src: '/src/assets/images/adidas-yeezy-boost-350-v2.webp', isFavourite: false}
  ])

  const cart = reactive<CartItem[]>([]);
  const favourite = reactive<Favourite[]>([]);

  function addItem(item: {name: string, price: number}) {
    let index = cart.findIndex(p => p.name === item.name);
    console.log(index);
    if(index !== -1) {
      cart[index].quantity++;
    } else {
      cart.push({name: item.name, quantity: 1});
    }
    toast.success('Item added to cart');
    // console.log(item);
    // console.log(cart);
  }

  function removeItem(item: {name: string, price: number}) {
    let index = cart.findIndex((p) => {
      return p.name === item.name
    })
    console.log(index)
    if(index !== -1) {
      cart[index].quantity--;
      if(cart[index].quantity === 0) {
        cart.splice(index, 1)
      }
    }
  }

  function deleteItem(item: {name: string, price: number}) {
    let index = cart.findIndex((p) => {
      return p.name === item.name
    });
    console.log(index)
    cart.splice(index, 1)
  }

  function updateFavourite(item: {name: string, price: number}, index: number) {
    let faveItem = products.find((p) => {
      return p.name === item.name;
    })
    console.log(faveItem);
    products[index].isFavourite = !products[index].isFavourite
    console.log('favourite updated')
    console.log(index)
  }

  return { products, cart, addItem, removeItem, deleteItem, updateFavourite,favourite }
})
