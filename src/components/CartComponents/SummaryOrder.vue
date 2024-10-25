<template>
  <div class="summary">
    <div class="information">
      <div class="units">
        <div class="tex">Artículos:</div>
        <div class="bold">{{ cartItems.length }}</div>
      </div>
      <div class="total">
        <div class="tex">Total:</div>
        <div class="bold">{{ formattedTotalAmount }}</div>
      </div>
      <div class="gray-line"></div>
    </div>
    <button class="btn">Check Out</button>
    <div class="payments">
      <div class="method">
        <i class="fa-brands fa-cc-visa fa-2xl" style="color: #21246e;"></i>
      </div>
      <div class="method">
        <img src="@/assets/paypal.svg" alt="PayPal" />
      </div>
      <div class="method">
        <img src="@/assets/mastercard.svg" alt="MasterCard" />
      </div>
      <div class="method">
        <i class="fa-brands fa-apple-pay fa-2xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {},
  computed: {
    ...mapGetters(['cartItems', 'formattedTotalAmount']),
  },
  mounted() {
    this.fetchCartItems();
  },
};
</script>

<style scoped>
.summary {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.information {
  width: 100%;
  height: 130px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.information .units, .information .total {
  width: 100%;
  display: flex;
  justify-content: space-between;
}


.information .units .tex, .information .total .tex {
  font-size: 18px;
  font-weight: 400;
  color: #4b5563;
  font: Inter;
  line-height: 30px;
}

.information .total .bold, .information .units .bold {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  font: Inter;
  font-style: normal;
  margin-left: auto;
  line-height: 30px;
}

.information .gray-line {
  content: '';
  display: block;
  align-self: flex-end;
  width: 35%;
  height: 1px;
  background-color: #d1d5db;
  margin: 1px 0 0 0;
}

.btn {
  margin: 30px 0;
  width: 100%;
  height: 60px;
  background-color: #f1a80b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  justify-self: space-around;
}

.payments {
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -25px;
  min-height: 80px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #fdfdfd;
  justify-content: space-around;
  border: 1px solid #d1d5db;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.payments .method {
  width: 60px;
  height: 45px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payments .method img {
  width: 100px;
  height: auto;
}

i {
  font-size: 2.6rem; /* Equivale a 40px si el tamaño base es 16px */
}

/* Ajustes en pantallas medianas */
@media (max-width: 1300px) {
  i {
    font-size: 2.6rem; /* Equivale a 42px */
  }
}

/* Ajustes en pantallas pequeñas */
@media (max-width: 720px) {
  i {
    font-size: 2.6rem; /* Equivale a 44px */
  }
}

@media (max-width: 854px) {
  .summary {
     position: sticky;
    bottom: 0;
    left: 0;
    width: 200vw;
    flex-direction: row;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #d1d5db;
    padding: 0 4vw;
    justify-content: space-around;
    align-content: center; 
  }

  .information {
    background-color: aqua;
    display: flex;
    width: 30%;
    align-self: center;
    height: 5vw;
    left: 70px;
    align-items: baseline;
    -webkit-box-align: baseline;
  }

  .information .total {
    font-size: 16px;
  }

  .payments, .information .total .tex, .information .units, .information .gray-line {
    display: none;
  }

  .btn {
    width: 120px;
    height: 30px;
    font-size: 16px;
  }

  .payments {
    padding-top: 10px;
  }

  i {
    font-size: 1.4rem;
  }
}

  </style>
