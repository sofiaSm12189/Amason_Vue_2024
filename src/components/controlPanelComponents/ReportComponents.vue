<template>
  <div class="report-container">
    <img class="logo" src="@/assets/Amason_Black.svg" alt="Logo AMASON" />
    <h1>Reporte de Productos Más Vendidos</h1>
    
    <div class="report-content">
      <!-- Filtro de Fechas -->
      <div class="date-filter">
        <label for="start-date">Fecha de Inicio:</label>
        <input type="date" v-model="startDate" id="start-date" />

        <label for="end-date">Fecha de Fin:</label>
        <input type="date" v-model="endDate" id="end-date" />

        <button @click="generateReport">Generar Reporte</button>
      </div>

      <div v-if="topSellingProducts.length" class="top-selling-products">
        <h3>Productos Más Vendidos</h3>
        <ul>
          <li v-for="product in topSellingProducts" :key="product.product_id">
            <span class="product-name">{{ product.name }}</span>
            <span class="product-sold">Vendidos: {{ product.total_sold }}</span>
            <span class="product-description">{{ product.description }}</span>
          </li>
        </ul>
      </div>

      <div v-else class="no-products-message">
        <p>No hay productos vendidos en el período seleccionado.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsData: [
        { product_id: 1, name: "Producto A", total_sold: 10, date: "2024-10-01", description: "Descripción del Producto A" },
        { product_id: 2, name: "Producto B", total_sold: 8, date: "2024-10-02", description: "Descripción del Producto B" },
        { product_id: 3, name: "Producto C", total_sold: 5, date: "2024-10-03", description: "Descripción del Producto C" },
        { product_id: 4, name: "Producto D", total_sold: 3, date: "2024-10-05", description: "Descripción del Producto D" }
      ],
      startDate: "",
      endDate: "",
      topSellingProducts: []
    };
  },
  methods: {
    generateReport() {
      const today = new Date();
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);

      // Validación de fechas
      if (startDate > today || endDate > today) {
        alert("No se pueden ingresar fechas futuras. Por favor, selecciona fechas válidas.");
        return;
      }

      if (startDate > endDate) {
        alert("La fecha de inicio no puede ser posterior a la fecha de fin.");
        return;
      }

      this.topSellingProducts = this.productsData.filter(product => {
        const saleDate = new Date(product.date);
        return saleDate >= startDate && saleDate <= endDate;
      });
    }
  }
};
</script>

<style scoped>
.report-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  width: 100%;
  max-width: 1200px;
  margin: 10px auto; /* Ajusta el margen superior aquí */
}

h1 {
  margin-top: 20px;
  color: #0077b6;
  text-align: center;
}

.report-content {
  display: flex;
  justify-content: space-between; /* Espacio entre los contenedores */
  align-items: flex-start; /* Alineación superior */
  width: 100%;
  margin-top: 20px; /* Espacio entre el título y el contenido */
  flex-direction: row; /* Mantén la dirección por defecto para pantallas grandes */
}

/* Filtro de Fechas */
.date-filter {
  width: 100%; /* Cambiado a 100% para mejor ajuste en móviles */
  max-width: 300px; /* Ancho máximo para evitar que se expanda demasiado */
  background-color: #3f9bb682;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px; /* Margen lateral */
}

.top-selling-products,
.no-products-message {
  order: 2; /* Asegura que este contenedor esté después */
}

.top-selling-products {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1px; /* Espacio entre el filtro y la lista de productos */
  flex: 1; /* Permite que este contenedor ocupe el espacio restante */
}

.no-products-message {
  text-align: center;
  color: #f00;
}

.date-filter label {
  display: block;
  margin-top: 10px;
}

.date-filter input,
.date-filter button {
  width: 100%;
  margin-top: 10px;
}

.top-selling-products h3,
.no-products-message p {
  margin-top: 0;
  font-size: 1.2em;
  color: #333;
}

.logo {
  display: block;
  margin: 0 auto 20px;
  max-width: 15%;
  height: auto;
}

.top-selling-products ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.top-selling-products li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-left: 20px;
}

.top-selling-products li:last-child {
  border-bottom: none;
}

.product-name {
  font-weight: bold;
  margin-right: 15px;
  color: #0077b6;
}

.product-sold {
  color: #555;
  margin-left: auto;
  font-size: 0.9em;
}

.product-description {
  display: block;
  color: #777;
  font-size: 0.9em;
  margin-top: 5px;
}

/* Media Queries para pantallas pequeñas */
@media (max-width: 768px) {
  .report-content {
    flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    align-items: center; /* Centra el contenido */
  }

  .date-filter {
    width: 100%;
    margin: 20px auto; /* Centra el filtro en pantallas pequeñas */
    order: 1; /* Primero en móviles */
  }

  .top-selling-products,
  .no-products-message {
    width: calc(100% - 40px); /* Ajusta el ancho para móviles */
    margin-left: 0;
    margin-right: 0;
    order: 2; /* Segundo en móviles */
  }
}

@media (max-width: 480px) {
  .report-container {
    padding: 10px;
  }

  h1 {
    font-size: 1.5em;
  }

  .top-selling-products,
  .no-products-message {
    padding: 10px;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .product-name,
  .product-sold,
  .product-description {
    font-size: 0.9em;
  }
}
</style>
