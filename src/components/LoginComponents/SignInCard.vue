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
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p>¿No tienes una cuenta?</p>
        <button type="button" @click="$emit('toggle')">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    async submitForm() {
      this.errorMessage = null;
      
      try {
        // Enviar datos de inicio de sesión y recibir la respuesta
        const response = await axios.post('http://localhost:8000/api/login', {
          email: this.email,
          password: this.password
        });
        
        // Guardar el token en localStorage y configurar el encabezado para futuras peticiones
        const token = response.data.token;
        const roles = response.data.roles; // Recibe los roles desde la API
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Mapear y verificar roles para redirigir al usuario a la página adecuada
        const roleNames = roles.map(role => role.name); // Captura el nombre del rol del usuario
        if (roleNames.includes('seller')) {
          this.$router.push('/sellerDashboard'); // Redirige al panel de control si el usuario es "seller"
        } else {
          this.$router.push('/Menu'); // Redirige al menú si el usuario no es "seller"
        }
        
      } catch (error) {
        // Manejo de errores de inicio de sesión
        this.errorMessage = error.response?.data?.message || 'Error al iniciar sesión. Intente nuevamente.';
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
}
</style>
