<template>
    <div class="help-center">
      <h2>Centro de Ayuda</h2>
      <ul>
        <li v-for="faq in faqs" :key="faq.id">
          <h3>{{ faq.question }}</h3>
          <p>{{ faq.answer }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelpCenter',
    data() {
      return {
        faqs: [
          { id: 1, question: '¿Cómo puedo hacer un reclamo?', answer: 'Puedes hacer un reclamo desde la sección de tickets.' },
          { id: 2, question: '¿Cómo solicito una devolución?', answer: 'Accede a la sección de devoluciones y sigue los pasos.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .help-center {
    padding: 20px;
  }
  </style>
  