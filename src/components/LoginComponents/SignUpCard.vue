<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      <form @submit.prevent="register">
        <h1>Registrarse</h1>
        <label for="name">Nombre</label>
        <input type="text" v-model="name" placeholder="Nombre" required />

        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="Email" required />

        <label for="password">Contraseña</label>
        <input type="password" v-model="password" placeholder="Contraseña" required />

        <label for="confirmPassword">Confirmar Contraseña</label>
        <input type="password" v-model="confirmPassword" placeholder="Confirmar contraseña" required />

        <label for="role">Tipo de Usuario</label>
        <select v-model="role" required>
          <option disabled value="">Seleccione el tipo de usuario</option>
          <option value="user">Cliente</option>
          <option value="seller">Vendedor</option>
        </select>

        <button class="Enviar">Confirmar</button>

        <!-- Mostrar mensajes de error o éxito -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

        <button type="button" @click="$emit('toggle')">¿Ya tienes una cuenta?</button>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '../../../api/auth';
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      errorMessage: '',
      successMessage: '' // Propiedad para almacenar el mensaje de éxito
    };
  },
  methods: {
    async register() {
      // Validación de contraseñas coincidentes y tipo de usuario
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return;
      }
      if (!this.role) {
        this.errorMessage = 'Por favor, seleccione un tipo de usuario.';
        return;
      }

      try {
        const response = await registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          role: this.role
        });

        // Guarda el token en el localStorage
        const token = response.data.token;
        localStorage.setItem('token', token);

        // Configura Axios para incluir el token en los headers de las siguientes peticiones
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Mostrar mensaje de éxito
        this.successMessage = '¡Usuario registrado con éxito!';

        // Vaciar los campos del formulario
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.role = '';

        // Eliminar el mensaje de éxito después de 3 segundos
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);

        // Cambio a pantalla de inicio de sesión
        this.$emit('toggle');
      } catch (error) {
        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message || 'Ocurrió un error';
          console.error('Detalles del error:', error.response.data);
        } else {
          this.errorMessage = 'Ocurrió un error desconocido';
          console.error('Error desconocido:', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-weight: 400;
  text-align: center;
}
.success-message {
  color: green;
  font-size: 1.2em;
  margin-top: 10px;
}
</style>
