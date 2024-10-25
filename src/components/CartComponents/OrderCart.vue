<script></script>
<template>
  <div class="order">
    <div class="title">Resumen</div>
    <div class="summary">
      <div class="inf">
        <div class="tex">Subtotal:</div>
        <div class="price">USD$200</div>
      </div>
      <div class="inf">
        <div class="tex">Envío:</div>
        <div class="price">USD$200</div>
      </div>
      <div class="inf">
        <div class="tex">Total:</div>
        <div class="price">USD$400</div>
      </div>
    </div>
    <button class="btn">Check Out</button>
    <div class="payments">
      <div class="method">
        <img src="@/assets/visa.png" alt="Visa" />
    </div>
        <div class="method">
         <img src="https://www.pngwing.com/es/free-png-spgxh    " alt="PayPal" />
        </div>
        <div class="method">
        <img src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/brandcenter/images/mc-logo-52.svg" alt="MasterCard" /></div>
    </div>                                                  
    </div>  
</template>

<style scoped>
.order {
  width: 376px;
  height: 532px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-sizing: border-box;
}

.order .title {
    margin: 2% 0;
    width: 376px;
    text-align: center;
    height: 46px;
    font-size: 30px;
    font: Manrope, sans-serif;
    font-weight: 600;
    color: #000;
    line-height: 46px;
}

.order .summary {
  width: 100%;
  height: 150px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  padding: 20px;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.order .summary .inf {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.summary .inf .tex {
  font-size: 18px;
  font-weight: 400;
  color: #4b5563;
  font: Inter;
  line-height: 30px;
}

.summary .inf .price {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  font: Inter;
  font-style: normal;
  margin-left: auto;
  line-height: 30px;
}

.order .summary .inf:nth-child(2) .price::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #d1d5db;
    margin: 10px 0 0 0;
}
.order .btn {
  width: 376px;
  height: 60px;
  background-color: #f1a80b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.payments {
    border-top: 1px solid #d1d5db;
    margin-top: auto;
    width: 376px;
    height: 100px;
    display: flex;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    border-bottom-left-radius: 12px; 
    border-bottom-right-radius: 12px; 
    background-color: #f9fafb;
    margin-bottom: -20px;
}

.payments .method {
    width: 60px;
    height: 45px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
}

.payments .method img {
    width: 100px;
    height: auto;
}
</style>
