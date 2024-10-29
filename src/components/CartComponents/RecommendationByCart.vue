<template>
  <div v-if="recomendaciones.length" class="recomendaciones">
    <h3>Productos Recomendados</h3>
    <div class="recomendaciones-container">
      <button @click="prevProduct" class="nav-button"><i class="fa-solid fa-arrow-left"></i></button>
      <div class="productos">
        <div
          v-for="(producto, index) in displayedProducts"
          :key="producto.product_id"
          :class="{
            'producto': true,
            'producto--current': index === 1,
            'producto--small': index !== 1,
          }"
        >
          <h4>{{ producto.name }}</h4>
          <p>Precio: ${{ producto.price }}</p>
        </div>
      </div>
      <button @click="nextProduct" class="nav-button"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recomendaciones: [],
      currentIndex: 0,
    };
  },
  computed: {
    displayedProducts() {
      const total = this.recomendaciones.length;
      return [
        this.recomendaciones[(this.currentIndex - 1 + total) % total],
        this.recomendaciones[this.currentIndex],
        this.recomendaciones[(this.currentIndex + 1) % total]
      ];
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/recommendationByCart', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      this.recomendaciones = response.data;
    } catch (error) {
      console.error('Error al obtener recomendaciones:', error);
    }
  },
  methods: {
    nextProduct() {
      this.currentIndex = (this.currentIndex + 1) % this.recomendaciones.length;
    },
    prevProduct() {
      this.currentIndex =
        (this.currentIndex - 1 + this.recomendaciones.length) % this.recomendaciones.length;
    }
  }
};
</script>

<style scoped>
.recomendaciones {
  margin-top: 20px;
  text-align: center;
}

.recomendaciones-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.nav-button {
  background-color: #058dc3;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin: 0 10px;
}

.nav-button:hover {
  background-color: #106384;
  transform: scale(1.05);
  animation: fa-beat 1.5s infinite;
}

.productos {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.producto {
  width: 200px;
  
  text-align: center;
  margin: 0 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.6;
}

.producto--current {
  transform: scale(1.2);
  opacity: 1;
  font-weight: bold;
}

.producto--small {
  transform: scale(0.8);
  opacity: 0.5;
}

.producto h4,
.producto p {
  margin: 5px 0;
}

/* Responsive - Muestra solo el producto central en móviles */
@media (max-width: 900px) {
  .productos {
    justify-content: center;
  }
  
  .producto--small {
    display: none; /* Oculta los productos laterales */
  }
  
  .producto--current {
    transform: scale(1); /* Ajusta el tamaño del producto central */
    opacity: 1;
  }
}
</style>
