<template>
  <div class="dashboard-container">
    <!-- Barra lateral -->
    <aside class="sidebar">
      <img class="logo" src="@/assets/Amason_Black.svg" alt="Logo AMASON" />
      <nav class="menu">
        <button @click="view = 'create'" :class="{ active: view === 'create' }">
          Crear Tienda
        </button>
        <button @click="view = 'manage'" :class="{ active: view === 'manage' }">
          Gestionar Tiendas
        </button>
        <button class="logout" @click="logout">Cerrar Sesión</button>
      </nav>
    </aside>

    <!-- Sección central -->
    <main class="content">
      <!-- Vista para crear una tienda -->
      <div v-if="view === 'create'">
        <h2>Crear Nueva Tienda</h2>
        <div class="form-group">
          <input
            type="text"
            v-model="newStoreName"
            placeholder="Nombre de la Tienda"
          />
          <textarea
            v-model="newStoreDescription"
            placeholder="Descripción de la Tienda"
            rows="4"
          ></textarea>
          <button class="btn-create" @click="addStore">Agregar Tienda</button>
        </div>
      </div>

      <!-- Vista para gestionar tiendas -->
      <div v-if="view === 'manage'">
        <h2>Mis Tiendas</h2>
        <div v-if="stores.length" class="store-list">
          <div v-for="(store, index) in stores" :key="index" class="store-item">
            <div>
              <span class="store-name">{{ store.name }}</span>
              <p class="store-description">{{ store.description }}</p>
            </div>
            <div class="store-actions">
              <button class="btn-products" @click="manageProducts(index)">
                Productos
              </button>
              <button class="btn-report" @click="generateTopSellingReport(index)">
                Más Vendidos
              </button>
              <button class="btn-edit" @click="editStore(index)">Editar</button>
              <button class="btn-delete" @click="deleteStore(index)">
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <p v-else class="empty-text">Aún no tienes tiendas creadas.</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: "create", // Vista actual
      newStoreName: "", // Nombre de la tienda
      newStoreDescription: "", // Descripción de la tienda
      stores: [], // Lista de tiendas
    };
  },
  methods: {
    addStore() {
      if (this.newStoreName.trim() === "") {
        alert("Por favor ingresa un nombre para la tienda.");
        return;
      }
      this.stores.push({
        name: this.newStoreName,
        description: this.newStoreDescription,
      });
      this.newStoreName = "";
      this.newStoreDescription = "";
      alert("¡Tienda creada exitosamente!");
    },
    editStore(index) {
      const newName = prompt("Nuevo nombre:", this.stores[index].name);
      const newDescription = prompt(
        "Nueva descripción:",
        this.stores[index].description
      );
      if (newName && newDescription) {
        this.stores[index].name = newName;
        this.stores[index].description = newDescription;
        alert("¡Tienda actualizada!");
      }
    },
    deleteStore(index) {
      if (confirm("¿Seguro que deseas eliminar esta tienda?")) {
        this.stores.splice(index, 1);
        alert("Tienda eliminada.");
      }
    },
    manageProducts(index) {
      alert(`Gestionando productos de ${this.stores[index].name}`);
      // Aquí podrías redirigir a una vista específica para gestionar productos.
    },
    generateTopSellingReport(index) {
      alert(`Generando reporte de productos más vendidos para ${this.stores[index].name}`);
      // Lógica adicional para mostrar o generar el reporte.
    },
    logout() {
      alert("Cerrando sesión...");
      // Redirigir a la pantalla de inicio de sesión o limpiar la sesión.
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  background-color: #f0f4f8;
}

/* Barra lateral */
.sidebar {
  width: 250px;
  background-color: #90cae9;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo {
  width: 200px;
  margin-bottom: 40px;
}

.menu button {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
}

.menu button.active {
  background-color: #0096c7;
  border-radius: 5px;
}

.logout {
  margin-top: auto;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.logout:hover {
  background-color: #e60000;
}

/* Sección central */
.content {
  flex: 1;
  padding: 40px;
}

h2 {
  margin-bottom: 20px;
  color: #0077b6;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-create {
  background-color: #0096c7;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-create:hover {
  background-color: #0077b6;
}

.store-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.store-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
}

.store-name {
  font-weight: bold;
}

.store-description {
  font-size: 14px;
  color: #555;
}

.store-actions {
  display: flex;
  gap: 10px;
}

.btn-products,
.btn-report,
.btn-edit,
.btn-delete {
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.btn-products {
  background-color: #0077b6;
}

.btn-report {
  background-color: #17c3b2;
}

.btn-edit {
  background-color: #ffc107;
  color: black;
}

.btn-delete {
  background-color: #ff4d4d;
}

.empty-text {
  color: #888;
  font-style: italic;
}
</style>
