<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
        <HelloWorld msg="Kicks Store"/>
        </div>
    </header>
    <section>
        <div v-for="(items, index) in store.products" :key="index" class="item">
            <figure class="figure">
                <img :src="items.src" alt="Air-Jordan-1" width="150px">
            </figure>
            <span class="item-name">{{ items.name }}</span>
            <span class="item-price">${{ items.price }}</span>
            <button @click="store.addItem(items)" class="addCartBtn">
                <span>Add</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="cart-icon" width="20px" height="20px">
                <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
            </button>
            <button class="favourite" @click="store.updateFavourite(items, index)">
                <span v-if="items.isFavourite">
                    <!-- unfavourite -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="outline" width="24px" height="24px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </span>
                <span v-else>
                    <!-- favourites -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="filled" width="24px" height="24px">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                </span>
            </button>
            <!-- <button @click="store.removeItem(items)">Remove</button> -->
        </div>
    </section>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.item {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: 150px;
    gap: 0.25rem;
    position: relative;
}
.figure {
    background-color: white;
    border-radius: 10px;
    grid-column: 1 / 3;

    img {
        display: block;
    }
}
.item-name {
    grid-column: 1 / 2;
    justify-self: flex-start;
    color: #fff;
}
.item-price {
    justify-self: flex-end;
}
section {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;
    row-gap: 1.5rem;
}
.addCartBtn {
    display: flex;
    padding: 0.5rem 1rem;
    width: max-content;
    gap: 1rem;
    align-items: center;
    grid-column: 1 / 3;
    border-radius: 10px;
    border: none;
}
.favourite {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px; /* Set width to match icon size */
    height: 24px; /* Set height to match icon size */
    padding: 0; /* Remove padding */
    z-index: 1;
}
</style>