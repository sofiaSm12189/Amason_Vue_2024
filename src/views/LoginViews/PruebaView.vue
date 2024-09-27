<template>

<header>
    <div class="navbar">
      <NavBar/>
    </div>
  </header>

</template>

<script setup>

    import NavBar from '@/components/LayoutComponents/NavBar.vue';

</script>


<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #53b2de;
  margin-bottom: 2rem;
}

.navbar {
  display: flex;
  width: 100%;
  padding: 0.5rem 2rem;
}

@media (max-width: 1034px) {
  .navbar {
    width: 1034px; /* Fija el ancho a 1034px cuando la ventana sea menor o igual a 1034px */
  }
}

</style>