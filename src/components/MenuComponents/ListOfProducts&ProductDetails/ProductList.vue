<template>
    <div class="min-h-screen bg-gray-100">
  
      <main class="container mx-auto py-8">
        <h2 class="text-3xl font-bold mb-6">Tecnología</h2>
        <div class="product-grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </main>
  
      
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
  
  <style>
  /* Estilos de ProductListing */
  .min-h-screen {
    min-height: 100vh;
  }
  .bg-gray-100 {
    background-color: #f7fafc;
  }
  /* Grid dinámica para productos */
  .product-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-columns: repeat(8, minmax(150px, 1fr));
    max-width: 100%;
  }
  </style>
  