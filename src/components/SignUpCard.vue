<script setup>
import SignUpForm from './SignUpForm.vue'
</script>

<template>
  <div class="main" id="main">
    <SignUpForm/>
  </div>
</template>

<script>
export default {
  // Script para la lógica del componente, si es necesario
};
</script>

<style scoped>
.main{
	margin: 80px;
  background-position: center;
	padding: 100px;
  font-family: 'Jost', sans-serif;
	background-color: rgb(98, 188, 224);;
	overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  min-width: 65vh;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}

</style>
