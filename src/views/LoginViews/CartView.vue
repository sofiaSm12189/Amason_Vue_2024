<template>
  <div class="body">
  <div class="container">
    <CarritoItem
      :products="[
        { image: '@/assets/xiaomi.jpg', name: 'Audifonos', description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 },
        { image: '@/assets/xiaomi.jpg', name: 'Audifonos', description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 },
        { image: '@/assets/xiaomi.jpg', name: 'Audifonos', description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 },
      
      ]"
      @delete="handleDelete"
    />
  </div> 
  <div class="order-container">
    <div class="order"> <SummaryOrder/></div> 
  </div>
   
  </div>
</template>

<script>
import CarritoItem from '../../components/CartComponents/CartItem.vue';
import SummaryOrder from '../../components/CartComponents/SummaryOrder.vue';

export default {
  components: {
    CarritoItem,
    SummaryOrder,
  },
  methods: {
    handleDelete(index) {
      this.products.splice(index, 1); 
    },
  },
};
</script>


<style scoped>
.body {
  background-color: #f3f3f3;
  font-family: 'Montserrat', sans-serif;
  height: auto;
  width: auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: space-around; 
}

.container {
  display: flex;
  width: 100%;
  max-width: 1020px;
  height: auto;
  margin-top: 20vh;
  padding: 12px 0;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2%;
  border-radius: 12px;
  background-color: white;
  box-sizing: border-box;
  
}

.order-container {
  margin-top: 20vh;
  flex-direction: column;
}

.order {
  position: relative;
  height: auto;
  gap: 40px;
  padding: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  width: 90vw;
  max-width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}
</style>
