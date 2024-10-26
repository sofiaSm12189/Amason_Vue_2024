<template>
    <div class="help-container">
      <div class="header">
        <h2>Centro de Ayuda</h2>
      </div>
      <div class="faq-list">
        <div class="faq" v-for="faq in faqs" :key="faq.id">
          <h3>{{ faq.question }}</h3>
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          { id: 1, question: '¿Cómo puedo devolver un producto?', answer: 'Puedes devolver un producto contactando con nuestro servicio de atención al cliente.' },
          { id: 2, question: '¿Cómo obtengo un reembolso?', answer: 'Los reembolsos se procesan automáticamente una vez aprobada la devolución.' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .help-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  .faq-list .faq {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  </style>
  