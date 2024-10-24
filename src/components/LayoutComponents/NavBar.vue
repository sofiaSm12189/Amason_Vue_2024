<template>
  <nav>
    <input type="checkbox" id="check" aria-label="Toggle navigation" @change="toggleBodyScroll">
    <label for="check" class="checkbtn">
      <i class="fas fa-bars" aria-hidden="true"></i>
    </label>
    <button @click="goToHome" aria-label="Go to Home" class="logo-button">
      <img src="@/assets/Amason_White.svg" alt="Logo" class="logo-img" style="width: 128px; height: auto;">
    </button>
    <div class="search-container">
      <input type="text" placeholder="Buscar artículo" aria-label="Buscar">
      <button type="button" aria-label="Buscar">
        <i class="fas fa-search" aria-hidden="true"></i>
      </button>
    </div>
    <ul>
      <li>
        <a class="active" href="#">
          <div class="line-1">Hola, usuario</div>
          <div class="line-2">Cuenta y listas</div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="line-1">Devoluciones y</div>
          <div class="line-2">pedidos</div>
        </a>
      </li>
      <li class="cart-container">
        <router-link to="/Carrito">
          <div class="line-1"><i class="fa-solid fa-cart-shopping"></i></div>
          <div class="line-2">Carrito</div>
        </router-link>
        <div class="cart-toggle">
          <PopUpCart/>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import PopUpCart from '../CartComponents/PopUpCart.vue';

export default {
  components: {
    PopUpCart
  },
  methods: {
    toggleBodyScroll(event) {
      if (event.target.checked) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }, goToHome() {
      this.$router.push('/Menu');
    }
  }
};
</script>

<style scoped>
.cart-container {
  position: relative;
}

.cart-toggle {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 1000;
  border-radius: 8px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(-10px);

}

.cart-container:hover .cart-toggle {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

nav {
  background-color: #4babe2;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.logo-button {
  background: none; 
  border: none; 
  padding: 0; 
  cursor: pointer;
}

.search-container {
  display: flex;
  align-items: center;
  width: 67%;
  justify-content: center;
}

.search-container input {
  padding: 5px;
  padding-left: 15px;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  width: 90%;
  line-height: 2rem;
  font-size: 1rem;
  background-color: #fff;
}

.search-container button {
  padding: 5px 10px;
  border: none;
  background-color: white;
  color: #4babe2;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  line-height: 2rem;
  background-color: #f1a80b;
}

.search-container button i {
  line-height: 1.5;
  color: black;
}

.line-1 {
  position: relative;
  white-space: nowrap;
}

.line-2 {
  position: relative;
  white-space: nowrap;
  font-weight: bold;
}

ul {
  display: flex;
  list-style: none;
  padding: 0 0px;
  margin: 0;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
}

ul li {
  padding: 0 8px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul li a {
  display: block;
  width: 100%;
  padding: 5px 0;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.checkbtn {
  font-size: 30px;
  color: white;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

@media (max-width: 854px) {
  .logo {
    font-size: 1.5rem;
  }
  .checkbtn {
    display: block;
    order: 1;
    margin-right: 20px;
  }

  .search-container {
    width: 50%;
  }

  .line-1 {
    display: none;
  }

  ul {
    position: fixed;
    top: 80px;
    right: -100%;
    background-color: #4babe2;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }

  ul li {
    margin: 20px 0;
    width: 100%;
  }

  ul li a {
    font-size: 20px;
    text-align: center;
  }

  #check:checked ~ ul {
    right: 0;
  }
}
</style>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
