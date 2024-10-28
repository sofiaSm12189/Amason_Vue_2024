<template>
  <div>
    <NavBar /> 
    <div class="background"></div> 
    <div class="chat-container">
      <div class="chat-header">
        <h2>Asistente de Soporte</h2>
      </div>
      <div ref="chatMessagesContainer" class="chat-messages">
        <div class="message bot-message">
          <!--<p>Hola, soy el asistente de soporte. ¿En qué puedo ayudarte?</p>-->
        </div>
  
        <div class="message bot-message">
          <!--<p>¿Cuál es el motivo de tu reclamo?</p>
          <select v-model="ticket.category" class="form-input" required>
            <option value="" disabled selected>Selecciona un reclamo</option>
            <option value="No se encuentra el paquete">No se encuentra el paquete</option>
            <option value="Producto dañado">Producto dañado</option>
            <option value="Error en la factura">Error en la factura</option>
            <option value="Otro">Otro</option>
          </select>-->
        </div>
  
        <div class="message bot-message">
         <!--<p>¿Cuál es el asunto del ticket?</p>
          <input type="text" v-model="ticket.subject" class="form-input" required placeholder="Escribe el asunto" />-->
        </div>
  
        <div class="message bot-message">
          <!--<p>Describe el problema:</p>
          <textarea v-model="ticket.description" class="form-input" required placeholder="Describe el problema..."></textarea>-->
        </div>
  
        <div class="message bot-message">
          <!--<p>¿Deseas recibir notificaciones?</p>
          <label>
            <input type="checkbox" v-model="ticket.notifyEmail" /> Email
          </label>
          <label>
            <input type="checkbox" v-model="ticket.notifySMS" /> Mensaje de texto
          </label>
          <input v-if="ticket.notifySMS" type="text" v-model="ticket.phoneNumber" class="form-input" placeholder="Número de teléfono (ej. 6098 8877)" />-->
        </div>

        <!-- Mostrar mensajes enviados por el usuario -->
        <div v-for="(message, index) in chatMessages" :key="index" class="message user-message">
          <p>{{ message }}</p>
        </div>
      </div>
      <div class="chat-input">
        <textarea 
          v-model="userMessage" 
          placeholder="Escribe tu mensaje aquí..." 
          class="form-input"
          @keydown.enter.prevent="sendMessage">
        </textarea>
        <button @click="sendMessage" class="btn-send">Enviar</button>
      </div>
      <div class="footer1">
        <button @click="submitTicket" class="btn-update">Actualizar</button>
      </div>
    </div>
    <footer>
      <FooterLayout /> 
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/LayoutComponents/NavBar.vue';
import FooterLayout from '@/components/LayoutComponents/FooterLayout.vue';

export default {
  components: { NavBar, FooterLayout }, 
  data() {
    return {
      ticket: {
        category: '',
        subject: '',
        description: '',
        notifyEmail: false,
        notifySMS: false,
        phoneNumber: '',
      },
      userMessage: '',
      chatMessages: [] // Lista de mensajes del chat
    };
  },
  methods: {
    submitTicket() {
      console.log("Ticket actualizado:", this.ticket);
    },
    sendMessage() {
      if (this.userMessage.trim()) { // Enviar solo si hay texto
        this.chatMessages.push(this.userMessage);
        this.userMessage = ''; // Limpiar el campo de texto después de enviar
        this.scrollToBottom();
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.chatMessagesContainer;
        container.scrollTop = container.scrollHeight;
      });
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; 
  background-color: #91ebff;
  background: linear-gradient(to top, #e2e2e2, #e8faff);
}

.chat-container {
  max-width: 650px;
  width: 100%;
  height: 700px;
  margin: 20px auto;
  background-color: #f4f6f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color:  #00aed5;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 1.2rem;
}

.chat-messages {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  flex-grow: 1;
}

.message {
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 80%;
}

.bot-message {
  background-color: #e9eff6;
  color: #333;
  align-self: flex-start;
}

.user-message {
  background-color:  #00aed5;
  color: white;
  align-self: flex-end;
}

.chat-input {
  display: flex;
  padding: 10px;
  background-color: #f4f6f9;
  border-top: 1px solid #ddd;
}

.form-input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-right: 10px;
  resize: none;
}

.btn-send {
  padding: 8px 16px;
  background-color:  #00aed5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-send:hover {
  background-color:  #00aed5;
}

.footer1 {
  padding: 15px;
  background-color: #f4f6f9;
  text-align: center;
  border-top: 1px solid #ddd;
}

.btn-update {
  padding: 10px 20px;
  background-color:  #00aed5;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-update:hover {
  background-color:  #00aed5;
}

@media (max-width: 480px) {
  .chat-container {
    max-width: 100%;
    height: auto;
  }

  .chat-header {
    font-size: 1rem;
    padding: 10px;
  }

  .btn-update {
    width: 100%;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .chat-container {
    max-width: 90%;
    height: auto;
  }

  .chat-header {
    font-size: 1.1rem;
  }

  .btn-update {
    font-size: 0.95rem;
  }
}
</style>
