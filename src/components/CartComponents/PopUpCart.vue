<template>
  <div class="minicart">
    <div class="minicart--item-container">
      ¡Tienes <span class="minicart--item-count" style="font-weight: 600">1 item(s)</span> en tu carrito!
    </div>
    <hr>
    <popUpCartItem/>
    <hr>
    <div class="minicart--subtotal">
      <p class="minicart--subtotal-title">Subtotal</p>
      <p class="minicart--subtotal-amount">$90.00</p>
    </div>
    
    <div>
      <input type="button" value="Ver detalles del carrito">
    </div>
    
  </div>
</template>

<script>
import popUpCartItem from './PopUpCartItem.vue';
export default {
  components: {
    popUpCartItem,
    
  },

    
}


</script>

<style scoped>


.minicart {
  font-family: sans-serif;
  width: 290px;
  height: auto;
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 30px 130px -8px rgba(0, 0, 0, 0.25);
  color: black;
  text-align: left;
  max-height: 600px;
}



.minicart input {
  margin-top: 20px;
  width: 100%;
  height: 43px;
  font-weight: 600;
  background: white;
  border: 2px solid #4babe2;
  outline: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.minicart input:hover {
  color: #fff;
  background: #4babe2;
}

.minicart--item-container {
  margin-bottom: 10px;
  font-size: .8em;
  
 
}

.minicart hr {
  margin-bottom: 20px;
  width: 100%;
}

.minicart--subtotal {
  margin: 20px 0;
}

.minicart--subtotal-title {
  float: left;
}

.minicart--subtotal-amount {
  float: right;
  font-weight: 600;
  font-size: 1.2em;
}

@media (max-height: 660px) {
  .minicart {
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>