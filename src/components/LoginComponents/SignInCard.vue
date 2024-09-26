<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      <form>
        <h1>Iniciar Sesión</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button class="Enviar" type="button">Ingresar</button>
        <p></p>
        <p>¿No tienes una cuenta?</p>
        <button type="button" @click="$emit('toggle')">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>

