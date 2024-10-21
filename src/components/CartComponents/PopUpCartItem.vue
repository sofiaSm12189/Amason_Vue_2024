<template>
    <ul>
      <li class="minicart--item" v-for="(product, index) in products" :key="index">
        <div class="placeholder"></div>
        <h1 class="title">{{ product.name }}</h1>
        <p class="material">Vendedor: {{ product.vendedor }}</p>
        <p class="price">Cantidad: {{ product.quantity }}</p>
        <p class="price">Precio: {{ product.price }}</p>
        <p class="remove">
          <a href="#" @click.prevent="removeProduct(index)">
            <i class="fa fa-trash-o"></i> Eliminar del carrito
          </a>
        </p>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { name: 'Producto 01', vendedor: 'siwi', material: 'Material 01', size: '10x10', price: 90.00, quantity: 1 },
          { name: 'Producto 02', vendedor: 'siwi',  material: 'Material 02', size: '15x15', price: 120.00, quantity: 2 },
          { name: 'Producto 03', vendedor: 'siwi', material: 'Material 03', size: '20x20', price: 150.00, quantity: 1 }
        ],
      };
    },
    methods: {
      removeProduct(index) {
        this.products.splice(index, 1);
      },
    },
  };
  </script>
  
<style scoped>

ul {
  list-style: none;
  padding: 0;
}

.minicart--item {
  margin-bottom: 10px;
  width: 100%;
  float: left;
}

.minicart--item > * {
  margin-bottom: 5px;
}

.placeholder {
  float: left;
  margin-right: 10px;
  width: 100px;
  height: 100px;
  background: #D8D8D8;
}

.title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
}

.material, .price {
  font-size: .8em;
  margin-bottom: 0;
  margin-top: 0;
}

.remove {
  margin-bottom: 0;
  margin-top: 0;
  font-size: .6em;
}




</style>