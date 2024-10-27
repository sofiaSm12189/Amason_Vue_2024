<template>
  <ul>
    <li class="minicart--item" v-for="(product, index) in cartItems" :key="index">
      <div class="minicart--item--details--container">
        <div class="placeholder">
          <img
            src="https://www.steren.cr/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/21867108a/audifonos-bluetooth-con-cancelacion-de-ruido-negros.jpg"
            alt="">

          <a href="#" class="remove" @click.prevent="removeProduct(product.product_id)">
            <i class="fa-solid fa-trash"></i>
          </a>
        </div>
        <div class="minicart--item--details">
          <p class="title">{{ product.product_name }}</p>
          <p class="vendedor"><i class="fa-solid fa-bag-shopping"></i> Descripción: {{ product.user_id }}</p>
          <p class="cantidad">
            <i class="fa-solid fa-hashtag"></i> Cantidad:
            <input type="number" class="input-quantity" :value="product.quantity"
            @change="updateQuantity(product.product_id, $event.target.value)" 
            min="1">
          </p>
          <p class="price"><i class="fa-solid fa-colon-sign"></i> Precio: {{ product.product_price }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems']),
  },
  methods: {
    ...mapActions(['removeProductFromCart', 'updateProductQuantity']),
    removeProduct(productId) {
      if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        this.removeProductFromCart(productId);
      }
    },
    updateQuantity(productId, quantity) {
      const parsedQuantity = parseInt(quantity, 10);
      if (parsedQuantity > 0) {
        this.updateProductQuantity({ productId, quantity: parsedQuantity });
      }
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

.minicart--item>* {
  margin-bottom: 5px;
}

.minicart--item--details--container {
  display: flex;
  gap: 10px;
}

.minicart--item--details--container>.placeholder {
  flex: 2;
  position: relative;
}

.minicart--item--details--container>.minicart--item--details {
  flex: 3;
}

.placeholder {
  float: left;
  width: 100px;
  height: 100px;
  background: #D8D8D8;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.minicart--item--details {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title,
.material,
.price,
.vendedor,
.cantidad {
  font-size: .8em;
  margin: 0;
}

.cantidad .input-quantity {
  width: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  padding: 2px;
  margin-left: 5px;
  text-align: center;
}

.title {
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
}

.remove {
  position: absolute;
  bottom: 0;
  right: 0;
}

a {
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  color: rgb(180, 33, 33);
}
</style>