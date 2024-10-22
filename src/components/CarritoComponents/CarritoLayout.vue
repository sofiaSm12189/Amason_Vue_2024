<template>
  <div>
    <div v-for="(item, index) in products" :key="index" class="details-card">
      <CarritoCheckbox />
      <div class="image-card">
        <img :src="item.image" :alt="item.alt" />
      </div>
      <div class="description-item">
        <div class="bold">
          <p>{{ item.name }}</p>
        </div>
        <div class="description">
          <p>{{ item.description }}</p>
        </div>
        <div class="bold">
          <p>USD${{ item.price }}</p>
        </div>
        <div class="delivery">
          <p>Costo de Envío: USD${{ item.delivery }}</p>
        </div>
        <div class="group">
          <div class="cantidad">
            <button class="quantity-btn" @click="decreaseQuantity(index)">-</button>
            <p class="quantity-display">{{ item.quantity }}</p>
            <button class="quantity-btn" @click="increaseQuantity(index)">+</button>
          </div>

          <button class="btn-delete" @click="deleteItem(index)">
            <img src="@/assets/delete.svg" alt="Eliminar" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarritoCheckbox from '../icons/CheckboxCart.vue';

export default {
  components: {
    CarritoCheckbox,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      localProducts: this.products.map(product => ({ ...product })),
    };
  },
  methods: {
    increaseQuantity(index) {
      this.localProducts[index].quantity++;
      this.$emit('update-quantity', index, this.localProducts[index].quantity); 
    },
    decreaseQuantity(index) {
      if (this.localProducts[index].quantity > 1) {
        this.localProducts[index].quantity--;
        this.$emit('update-quantity', index, this.localProducts[index].quantity); 
      }
    },
    deleteItem(index) {
      this.$emit('delete', index);
      alert('Elemento eliminado.');
    },
    shareItem() {
      
      alert('Compartido exitosamente.'); 
    },
  },
};
</script>

<style scoped>
.details-card {
  margin-left: 18px;
  display: flex;
  justify-content: space-between;
  border-top: var(--sds-size-stroke-border) solid rgba(0, 0, 0, 0.46);
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}
.details-card .image-card {
  flex-shrink: 0;
  align-content: center;
}

.details-card .image-card img {
  width: 170px;
  height: auto;
}

.details-card .description-item {
  flex-grow: 1;
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.details-card .description-item .description,
.details-card .description-item .bold,
.details-card .description-item .group .delivery {
  margin-bottom: 2px;
}

.details-card .description-item .description {
  width: 720px;
  height: 75px;
  flex-shrink: 0;
  color: #000;
  font-family: Arial;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.details-card .description-item .bold {
  align-self: flex-start;
  line-height: 140%;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  text-align: right;
}
.details-card .description-item .delivery {
  align-self: flex-start;
  line-height: 140%;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.details-card .description-item .group {
  width: 720px;
  height: 70px;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  display: flex;  
}

.details-card .group .cantidad {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 5px;
  background-color: #e2e2e2;
  width: 80px;
  height: 30px;
}

.details-card .group .cantidad button.quantity-btn {
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  font-size: 20px;
  color: #808080;
  cursor: pointer;
}

.description-item .group .btn-delete {
  font-weight: 700;
  padding: 15px;
  line-height: 140%;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
