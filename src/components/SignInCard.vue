<template>

 

  <div class="container" id="container">
    <img src="../assets/Logo.png" alt="Amason Logo">
    <div class="form-container sign">
      <form>
        <h1>Iniciar Sesión</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button" @click="$emit('toggle')">Registrarse</button>
        <button class="Enviar" type="button">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>

