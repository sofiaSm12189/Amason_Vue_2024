<template>
    <div class="min-h-screen bg-gray-100">
      <main class="container mx-auto py-8">
        <div class="product-detail">
          <!-- Imagen del producto -->
          <div class="product-image">
            <img :src="product.image" :alt="product.name" class="w-full h-auto object-contain" />
          </div>
  
          <!-- Información del producto -->
          <div class="product-info">
            <h2 class="text-3xl font-bold mb-4">{{ product.name }}</h2>
            <p class="text-gray-600 mb-2">Categoría: {{ product.category }}</p>
            <p class="text-xl font-semibold text-green-600 mb-4">Precio: ${{ product.price.toFixed(2) }}</p>
            <p class="text-gray-600 mb-4">Stock: {{ product.stock > 0 ? 'Disponible' : 'Agotado' }}</p>
            <p class="text-gray-700 mb-6">{{ product.description }}</p>
  
            <!-- Botones de acción -->
            <div class="flex space-x-4">
              <button class="buy-button">Comprar</button>
              <button class="add-to-cart-button">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: "Smartphone X1",
          category: "Tecnología",
          price: 299.99,
          stock: 25,
          description: "Este es un excelente smartphone con las mejores características para acompañarte en tu día a día.",
          image: "https://via.placeholder.com/400",
        },
      };
    },
  };
  </script>
  
  <style>
  /* Estilos de ProductDetail */
  .min-h-screen {
    min-height: 100vh;
  }
  .bg-gray-100 {
    background-color: #f7fafc;
  }
  
  /* Estilo de contenedor para el detalle del producto */
  .product-detail {
    display: flex;
    gap: 2rem;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Imagen del producto */
  .product-image {
    flex: 1;
    max-width: 400px;
  }
  
  /* Información del producto */
  .product-info {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
  
  /* Botones */
  .buy-button {
    padding: 0.75rem 1.5rem;
    background-color: #FF9900;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .buy-button:hover {
    background-color: #e58d00;
  }
  
  .add-to-cart-button {
    padding: 0.75rem 1.5rem;
    background-color: #4babe2;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .add-to-cart-button:hover {
    background-color: #3a94b1;
  }
  </style>
  