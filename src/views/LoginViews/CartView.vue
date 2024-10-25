<template>
  <div class="body">
    <div class="container">
      <div class="container--title-options">
        <div class="title--container">
        <h2>Carrito de compras</h2>
        <a href="#" @click.prevent="toggleSelectAll">
          {{ selectedAll ? "Deseleccionar todos los artículos" : "Seleccionar todos los artículos" }}
        </a>
      </div>
      <div class="delete-container" v-if="selectedCount > 0">
        <button class="delete-btn" @click="deleteSelectedItems">Eliminar artículos</button>
      </div>
      </div>
      

      <CarritoItem 
        :products="products" 
        :selected-all="selectedAll" 
      />
    </div>

    <div class="order">
      <SummaryOrder />

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
  data() {
    return {
      selectedAll: false,
      selectedCount: 0, // Nuevo estado para contar los artículos seleccionados
      products: [
        { image: 'https://www.steren.cr/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/21867108a/audifonos-bluetooth-con-cancelacion-de-ruido-negros.jpg', name: 'Audifonos',
          description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 },
          { image: 'https://www.steren.cr/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/21867108a/audifonos-bluetooth-con-cancelacion-de-ruido-negros.jpg', name: 'Audifonos',
          description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 },
          { image: 'https://www.steren.cr/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/21867108a/audifonos-bluetooth-con-cancelacion-de-ruido-negros.jpg', name: 'Audifonos',
          description: 'XIAOMI-auriculares inalámbricos Mini con Bluetooth 5,3, cascos TWS con Control táctil, deportivos, resistentes al agua, para juegos', price: 15, delivery: 2, quantity: 1 }
      ],
    };
  },
  methods: {
    toggleSelectAll() {
      this.selectedAll = !this.selectedAll;
      this.selectedCount = this.selectedAll ? this.products.length : 0;
      this.$emit('update-selection', this.selectedCount);

    },
  },
};
</script>


<style scoped>
.body {
  display: flex;
  background-color: #f3f3f3;
  font-family: 'Montserrat', sans-serif;
  padding: 15px 10vh;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: space-around;
  gap: 20px;

}

.container {
  display: flex;

  flex-direction: column;
  width: 100%;
  padding: 12px 0;
  flex-direction: column;
  margin-bottom: 2%;
  border-radius: 12px;
  background-color: white;
  box-sizing: border-box;

  min-width: 500px;
}

.container--title-options{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title--container {
  display: inline-block;
  padding: 10px 30px
}

.title--container h2 {
  font-size: 24px;
  font-weight:bolder;
  margin: 10px 0;
}

.title--container a {
  font-size: 18px;
  font-weight: 500;
  color: #058dc3;
  text-decoration: none;
}

hr {
  border: 0;
  height: 1.5px;
  background: rgb(106, 106, 106);
  margin-top: 20px;

}


.body>.container {
  flex: 3;
}

.body>.order {
  flex: 1;
}

.order {
  height: fit-content;

  gap: 40px;
  padding: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.delete-container {
  margin: 15px;
}

.delete-btn {
  background-color: #c8240d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.delete-btn:hover {
  background-color: #b71c1c;
}

</style>
