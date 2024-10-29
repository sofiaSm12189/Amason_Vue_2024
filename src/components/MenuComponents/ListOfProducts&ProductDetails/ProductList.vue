<template>
  <div class="list-cotainer">

    <h2>{{ title }}</h2>
    <div class="product-list-cotainer">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import axios from "axios";

export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
      title: '',
    };
  },
  async created() {
    const categoryId = this.$route.query.categoryId;
    const title = this.$route.query.title;
    if (categoryId) {
      this.title = title;
      await this.fetchProductsByCategory(categoryId, title);
    }
  },
  methods: {
    async fetchProductsByCategory(categoryId) {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/category/${categoryId}`);
        this.products = response.data;
      } catch (error) {
        console.error("Error al cargar productos por categoría:", error);
      }
    }
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