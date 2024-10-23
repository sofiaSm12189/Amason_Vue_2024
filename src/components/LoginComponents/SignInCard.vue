<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      
      <form @submit.prevent="submitForm">
        <h1>Iniciar Sesión</h1>
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
        
        <label for="password">Password</label>
        <input type="password" v-model="password" required />

        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
        <p>¿No tienes una cuenta?</p>
        <button type="button" @click="$emit('toggle')">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from '../../../api/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async submitForm() {
      try {
        this.error = null;
        await loginUser({ email: this.email, password: this.password });
        this.$router.push('/Menu');
      } catch (error) {
        this.error = 'Por favor, revise sus credenciales e intente nuevamente.';
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>