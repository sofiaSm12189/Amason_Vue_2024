<template>
  <div class="summary">
    <div class="information">
      <div class="inf">
        <div class="tex">Artículos:</div>
        <div class="price">(3)</div>
      </div>
      <div class="inf">
        <div class="tex">Total:</div>
        <div class="price">USD$400</div>
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

<style scoped>
.summary {
  width: 100%;
  min-width: 300px;
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

.information .inf {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.information .inf .tex {
  font-size: 18px;
  font-weight: 400;
  color: #4b5563;
  font: Inter;
  line-height: 30px;
}


.information .inf .price {
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
  margin: 10px 0;
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
  margin-top: auto;
  width: 100%;
  min-height: 80px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #fdfdfd;
  justify-content: space-around;
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

@media (max-width:720px) {
  .payments {
    width: 100%;
    height: 100%;
  }

  .payments .method {
    width: 60px;
    height: 45px;
  }

  i {
    font-size: 1.7vw;

  }
}
</style>
