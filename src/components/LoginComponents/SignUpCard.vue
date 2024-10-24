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

        <!-- Mostrar mensaje de éxito -->
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

        <button type="button" @click="$emit('toggle')">¿Ya tienes una cuenta?</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      successMessage: '' // Propiedad para almacenar el mensaje de éxito
    }
  },
  methods: {
    async register() {
      try {
        // Validar que las contraseñas coincidan
        if (this.password !== this.confirmPassword) {
          alert('Las contraseñas no coinciden')
          return
        }

        if (!this.role) {
          alert('Por favor, seleccione un tipo de usuario.')
          return
        }

        // Realizar la solicitud de registro a la API
        const response = await axios.post('http://localhost:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          role: this.role
        })

        // Guarda el token en el localStorage para futuras peticiones
        const token = response.data.token
        localStorage.setItem('token', token)

        // Configura Axios para incluir el token en los headers de las siguientes peticiones
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        // Mostrar mensaje de éxito
        this.successMessage = '¡Usuario registrado con éxito!'

        // Vaciar los campos del formulario
        this.name = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
        this.role = ''

        // Eliminar el mensaje de éxito después de 3 segundos
        setTimeout(() => {
          this.successMessage = ''
        }, 3000)

        // Redirigir a la página principal o al menú (opcional)
        // this.$router.push('/')
      } catch (error) {
        if (error.response && error.response.data) {
          console.error('Detalles del error:', error.response.data);
          alert('Error: ' + JSON.stringify(error.response.data));  // Muestra más detalles del error al usuario
        } else {
          console.error('Error desconocido:', error);
          alert('Ocurrió un error desconocido');
        }
      }
    }
  }
}
</script>

<style scoped>
.success-message {
  color: green;
  font-size: 1.2em;
  margin-top: 10px;
}
</style>
