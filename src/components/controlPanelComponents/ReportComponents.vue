<template>
    <div class="report-container">
      <h1>Reporte de Productos Más Vendidos</h1>
      
      <div class="date-filter">
          <label for="start-date">Fecha de Inicio:</label>
          <input type="date" v-model="startDate" id="start-date" />
  
          <label for="end-date">Fecha de Fin:</label>
          <input type="date" v-model="endDate" id="end-date" />
  
          <button @click="fetchTopSellingProducts(storeId)">Obtener Reporte</button>
        </div>
      <div v-if="store && store.name">
        <h2>Tienda: {{ store.name }}</h2>
        <p>Descripción: {{ store.description }}</p>
  
        <!-- Formulario para seleccionar fechas -->
       
  
        <div class="top-selling-products" v-if="topSellingProducts.length">
          <h3>Productos Más Vendidos</h3>
          <ul>
            <li v-for="product in topSellingProducts" :key="product.product_id">
              {{ product.name }} - Vendidos: {{ product.total_sold }}
            </li>
          </ul>
        </div>
        <p v-else>No hay productos vendidos en el período seleccionado.</p>
      </div>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['storeId'], // Recibe el storeId como prop
    data() {
      return {
        store: {}, // Almacena la información de la tienda
        topSellingProducts: [], // Almacena los productos más vendidos
        startDate: '', // Almacena la fecha de inicio ingresada por el usuario
        endDate: '', // Almacena la fecha de fin ingresada por el usuario
      };
    },
    mounted() {
      this.fetchStoreData(this.storeId);
    },
    methods: {
      fetchStoreData(storeId) {
  
        // Lógica para obtener la tienda por storeId
        this.store = this.stores.find(store => store.id === storeId);
      },
      fetchTopSellingProducts(storeId) {
    fetch(`/api/stores/${storeId}/top-selling-products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            start_date: this.startDate,
            end_date: this.endDate
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Error al obtener los productos más vendidos');
        return response.json();
    })
    .then(data => {
        this.topSellingProducts = data;
    })
    .catch(error => {
        console.error(error);
        this.topSellingProducts = []; // Manejo de errores
    });
}
      
    },
  };
  </script>
  
  <style scoped>
  .report-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
  }
  
  h1 {
  color: #0077b6;
  text-align: center;
}
.date-filter {
  float: right; /* Alinea el contenedor a la derecha */
  width: 300px; /* Ajusta el ancho del contenedor */
  background-color: #3f9bb682; /* Color de fondo similar */
  border: 1px solid #ddd; /* Borde ligero */
  border-radius: 5px; /* Bordes redondeados */
  padding: 15px; /* Espaciado interno */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para efecto de elevación */
}

.date-filter label {
  display: block; /* Muestra cada etiqueta en una nueva línea */
  margin-top: 10px;
}

.date-filter input,
.date-filter button {
  width: 100%; /* Hace que el input y el botón ocupen todo el ancho del contenedor */
  margin-top: 10px;
}
.top-selling-products {
  background-color: #ffffff; /* Fondo blanco para el cuadro */
  border: 1px solid #ddd; /* Borde ligero */
  border-radius: 5px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para efecto de elevación */
  margin-top: 20px;
}

.top-selling-products h3 {
  margin-top: 0; /* Elimina el margen superior */
  font-size: 1.2em; /* Ajusta el tamaño de fuente */
  color: #333; /* Color de texto oscuro */
}

.top-selling-products ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.top-selling-products li {
  padding: 10px; /* Espacio entre cada producto */
  border-bottom: 1px solid #eee; /* Borde inferior claro */
}

.top-selling-products li:last-child {
  border-bottom: none; /* Elimina el borde inferior del último elemento */
}
  </style>