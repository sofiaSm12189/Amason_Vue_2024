
<template>
  <div class="container" id="container">

    <slot></slot>
    <div class="form-container sign">
      <form>
        <h1>Registrarse</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm your password" />
        <button class="Enviar">Confirmar</button>
        <p></p>
        <button type="button"  @click="$emit('toggle')">¿Ya tienes una cuenta?</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  // Script para la lógica del componente, si es necesario
};
</script>

<style scoped>


</style>



