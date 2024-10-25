<template>
  <div v-for="(item, index) in products" :key="index" class="details-card">
    <CarritoCheckbox :checked="selectedAll" @update:checked="updateSelection(index, $event)" />
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
      <div class="group">
        <div class="quantity">
          <button class="quantity-btn" @click="decreaseQuantity">-</button>
          <p class="quantity-display">{{ quantity }}</p>
          <button class="quantity-btn" @click="increaseQuantity">+</button>
        </div>
        <button class="btn-delete" @click="deleteItem(index)">
          <i class="fa-solid fa-trash-can fa-2xl" style="color: #c8240d;"></i>
        </button>
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
    selectedAll: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateSelection(index, checked) {
      this.$emit('update-selection', checked ? 1 : -1);
    },
  },
};
</script>

<style>
.details-card {
  margin-left: 18px;
  display: flex;
  justify-content: space-between;
  border-top: var(--sds-size-stroke-border) solid rgba(0, 0, 0, 0.46);
  padding: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  flex-wrap: wrap;
  /* Para que los elementos se ajusten en pantallas pequeñas */
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
.details-card .description-item .delivery {
  margin-bottom: 1px;
}

.details-card .description-item .description {
  width: 100%;
  /* Asegura que ocupe todo el ancho disponible en pantallas pequeñas */
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
  width: 100%;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.details-card .group .quantity {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #e2e2e2;
  width: 20vw;
  height: auto;
}

.details-card .group .quantity button.quantity-btn {
  width: 1vw;
  height: 1vw;
  background: none;
  border: none;
  font-size: 1vw;
  color: #808080;
  cursor: pointer;
}

.description-item .group .btn-delete {
  padding: 2vw;
  line-height: 140%;
  border: none;
  background: transparent;
  cursor: pointer;
}


@media (min-width: 768px) {
  .details-card {
    flex-wrap: nowrap;
    padding: 20px;
  }

  .details-card .image-card img {
    width: 150px;
  }

  .details-card .description-item {
    margin-left: 20px;
  }

  .details-card .description-item .description,
  .details-card .description-item .bold,
  .details-card .description-item .delivery {
    font-size: 16px;
  }

  .details-card .group .quantity {
    width: 80px;
    height: 40px;
  }

  .details-card .group .quantity button.quantity-btn {
    width: 30px;
    height: 30px;
  }

  .description-item .group .btn-delete {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .details-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .details-card .image-card {
    width: 100%;
    text-align: center;
  }

  .details-card .image-card img {
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  .details-card .description-item {
    margin-left: 0;
    width: 100%;
    padding: 10px 0;
  }

  .details-card .group .quantity {
    width: 100%;
    justify-content: space-between;
  }

  .details-card .group .quantity button.quantity-btn {
    width: 30px;
    height: 30px;
    font-size: 3vw;
  }

  .description-item .group {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .description-item .group .btn-delete {
    align-self: flex-end;
    order: -1;
    margin-top: -60px;
  }
}
</style>