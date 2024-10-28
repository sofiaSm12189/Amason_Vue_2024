<template>
  <div class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
    <div class="p-4">
      <img
        :src="product.image"
        :alt="product.name"
        width="200"
        height="200"
        class="w-full h-48 object-contain mb-2"
      />
      <h3 class="font-semibold text-lg mb-1 line-clamp-2">{{ product.name }}</h3>
      <p class="text-xl font-bold mb-2">${{ product.price.toFixed(2) }}</p>
      <button class="car-button">
        <span class="mr-2">🛒</span>
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Styles for ProductCard */
.w-full {
  width: 100%;
}
.border {
  border-width: 1px;
}
.border-gray-300 {
  border-color: #d1d5db;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.overflow-hidden {
  overflow: hidden;
}
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.p-4 {
  padding: 1rem;
}
.h-48 {
  height: 12rem;
}
.object-contain {
  object-fit: contain;
}
.font-semibold {
  font-weight: 600;
}
.text-lg {
  font-size: 1.125rem;
}
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.text-yellow-400 {
  color: #fbbf24;
}
.text-gray-300 {
  color: #d1d5db;
}
.text-sm {
  font-size: 0.875rem;
}
.text-gray-600 {
  color: #4b5563;
}
.text-xl {
  font-size: 1.25rem;
}
.font-bold {
  font-weight: 700;
}
.car-button {
  background-color: #ff9900; 
    color: white; 
    padding: 15px 30px; 
    font-size: 16px; 
    font-weight: bold; 
    border: none; 
    border-radius: 8px; 
    width: 100%; /* Botón ocupa todo el ancho del contenedor */
    text-align: center; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
}
.car-button:hover {
  background-color: #e58900 !important;
}
.text-white {
  color: white;
}
.p-2 {
  padding: 0.5rem;
}
.rounded {
  border-radius: 0.25rem;
}
</style>
