<template>

  <div class="product-container">

    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <div class="price-addCart">
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <i @click="addProductToCart(product)" class="fas fa-cart-plus fa-2x"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; 
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('cart', ['addProductToCart']),

    
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
</style>
