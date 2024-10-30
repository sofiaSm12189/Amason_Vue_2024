<template>
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
    
</template>

<script>

export default {
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
      chatMessages: [] 
    };
  },
  methods: {
    submitTicket() {
      console.log("Ticket actualizado:", this.ticket);
    },
    sendMessage() {
      if (this.userMessage.trim()) { 
        this.chatMessages.push(this.userMessage);
        this.userMessage = ''; 
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  overflow: hidden;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, #e2e2e2, #e8faff);
  z-index: -1;
}

.chat-container {
  width: 100%;
  max-width: 650px;
  height: 80vh;
  margin: 20px auto;
  background-color: #f4f6f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  background-color: #00aed5;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
}

.chat-messages {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  background-color: #00aed5;
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
  background-color: #00aed5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-send:hover {
  background-color: #0079a1;
}

.footer {
  width: 100%;
}

.btn-update {
  padding: 10px 20px;
  background-color: #00aed5;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-update:hover {
  background-color: #0079a1;
}

@media (max-width: 768px) {
  .chat-container {
    width: 90%;
    height: 75vh;
    margin: 10px;
  }
  .chat-header {
    font-size: 1rem;
  }
  .btn-update {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media (max-width: 768px) {
  .btn-update {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .chat-container {
    width: 100%;
    height: 70vh;
  }
  .chat-header, .btn-send, .btn-update {
    font-size: 0.85rem;
  }
  .chat-messages, .chat-input {
    padding: 8px;
  }
}
</style>
