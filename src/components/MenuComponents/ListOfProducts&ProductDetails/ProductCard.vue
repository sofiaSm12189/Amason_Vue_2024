<template>

  <div class="product-container">

    <img :src="product.product_image" :alt="product.product_name" />
    <h3>{{ product.product_name }}</h3>
    <div class="price-addCart">
  <p class="price">${{ product.product_price.toFixed(2) }}</p>
  <i 
    @click="addProduct(product)" 
    class="fas fa-cart-plus fa-2x" 
    :class="{ 'loading': isAdding }"
    :style="{ cursor: isAdding ? 'not-allowed' : 'pointer' }"
    :disabled="isAdding"
  ></i>
</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; 
export default {
  data() {
  return {
    isAdding: false,
  };
},
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
  ...mapActions('cart', ['addProductToCart']),

  async addProduct(product) {
    this.isAdding = true;  // Cambia el estado a "agregando"
    try {
      await this.addProductToCart(product);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    } finally {
      this.isAdding = false;  // Restaura el estado
    }
  },
},

};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 40px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s; 
  margin: 5px 8px;
}

.product-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); 
} 

.price-addCart {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

}

.price {
  font-size: 1.2rem;
  font-weight: bold;
}

i {
  cursor: pointer;
  color: black;
}

.loading {
  color: #4babe2;
  animation: spin 1s infinite; 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
