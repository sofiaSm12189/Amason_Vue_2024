<template>
  <div class="container">
    <CarritoLayout
      :products="[
        { image: '@/assets/xiaomi.jpg', name: 'Audifonos', description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 },
        { image: '@/assets/xiaomi.jpg', name: 'Audifonos', description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 },
      
      ]"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import CarritoLayout from '@/components/CarritoComponents/CarritoLayout.vue'

export default {
  components: {
    CarritoLayout,
  },
  methods: {
    //handleDelete(index) {
      // Lógica para manejar la eliminación
   // },
  },
};
</script>


<style>
body{
  background-color: #f3f3f3;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  width: 1050px;
  height: 500px;
  margin-top: 24vh;
  margin-left: 13vh;
  padding: 13px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: #fff;
  border: 2px solid #fff;
}
</style>
