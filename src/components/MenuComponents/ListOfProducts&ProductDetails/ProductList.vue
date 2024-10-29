<template>
  <div class="list-cotainer">

    <h2><i class="fa-solid fa-laptop"></i> Tecnología <i class="fa-solid fa-headset"></i></h2>
    <div class="product-list-cotainer">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { products } from "./mock-data";

export default {
  components: { ProductCard },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>

.list-cotainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
}

.product-list-cotainer {
  display: grid;
  align-items: center;
  width: 80vw;
  grid-template-columns: repeat(auto-fill, minmax(300px, 0.4fr));
  justify-content: center;
  gap: 1rem;
}

@media (width <= 1030){
  .product-list-cotainer {
    width: 90vw;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>