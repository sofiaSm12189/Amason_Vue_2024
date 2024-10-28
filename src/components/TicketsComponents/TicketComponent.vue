<template>
  <div>
    <NavBar /> 

    <div class="page-wrapper">
      <div class="background"></div> 

      <div class="main-container"> 
        <div class="header">
          <h2>Sistema de Tickets</h2>
          <div class="header-actions">
            <router-link to="/create-ticket">
              <button class="btn btn-create">Crear Nuevo Ticket</button>
            </router-link>
          </div>
        </div>
    
        <table class="ticket-table">
          <thead>
            <tr>
              <th>Orden o Paquete</th>
              <th>Tipo de Reclamo</th>
              <th>Asunto</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in tickets" :key="ticket.id">
              <td data-label="Orden o Paquete">{{ ticket.order }}</td>
              <td data-label="Tipo de Reclamo">{{ ticket.claimType }}</td>
              <td data-label="Asunto">{{ ticket.subject }}</td>
              <td data-label="Descripción">{{ ticket.description }}</td>
              <td data-label="Estado">{{ ticket.status }}</td>
              <td data-label="Acciones">
                <router-link to="/details-ticket">
                  <button class="btn btn-details">Ver Detalles</button>
                </router-link>
                <router-link to="/update-ticket">
                  <button class="btn btn-update">Actualizar Ticket</button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
      tickets: [
        {
          id: 1,
          order: 'Paquete 123',
          claimType: 'Producto defectuoso',
          subject: 'Problema con el producto',
          description: 'El producto llegó dañado.',
          status: 'Abierto'
        },
        {
          id: 2,
          order: 'Paquete 456',
          claimType: 'Entrega tardía',
          subject: 'El paquete no ha llegado',
          description: 'Han pasado 10 días y no recibí el paquete.',
          status: 'Abierto'
        },
        {
          id: 3,
          order: 'Paquete 789',
          claimType: 'Otro',
          subject: 'Consulta sobre el envío',
          description: 'Quiero saber el estado del envío.',
          status: 'Cerrado'
        }
      ]
    };
  },
  methods: {
    viewTicket(ticketId) {
      console.log("Ver detalles del ticket:", ticketId);
    },
    updateTicket(ticketId) {
      console.log("Actualizar ticket:", ticketId);
    }
  }
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

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #34495e;
  color: white;
}

.navbar-logo .logo {
  width: 50px;
  height: auto;
}

.navbar-categories {
  display: flex;
  gap: 15px;
}

.navbar-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navbar-link:hover {
  color: #00aed5;
}

.main-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h2 {
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 10px;
}

.header-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
}

.ticket-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.ticket-table th,
.ticket-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.ticket-table th {
  background-color: #00aed5;
  color: white;
  font-weight: bold;
}

.ticket-table tr:hover {
  background-color: #f1f1f1;
}

.btn {
  padding: 8px 12px;
  font-size: 1rem;
  background-color: #00aed5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}

.btn-create {
  background-color: #00aed5;
}

.btn-create:hover {
  background-color: #006c8e;
}

.btn-update {
  background-color: #27ae60;
}

.btn-update:hover {
  background-color: #1e8449;
}

.btn-details {
  background-color: #e74c3c;
}

.btn-details:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .main-container {
    padding: 10px;
  }

  .header h2 {
    font-size: 1.5rem;
  }

  .ticket-table th, .ticket-table td {
    padding: 10px;
    font-size: 0.9rem;
  }

  .btn {
    padding: 6px 10px;
    font-size: 0.9rem;
  }

  .header-actions {
    flex-direction: column;
  }

  .ticket-table thead {
    display: none;
  }

  .ticket-table tr {
    display: block;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 10px;
  }

  .ticket-table td {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 5px 10px;
    text-align: right;
  }

  .ticket-table td::before {
    content: attr(data-label);
    font-weight: bold;
    color: #34495e;
    text-align: left;
    margin-right: 10px;
  }
}
</style>


