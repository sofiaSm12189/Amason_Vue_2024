<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2 class="modal-title">Editar Producto</h2>
      <form @submit.prevent="saveChanges">
        <div class="form-group">
          <label for="name">Nombre del Producto</label>
          <input
            type="text"
            id="name"
            v-model="localProduct.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="category_id">Categoría</label>
          <select
            id="category"
            v-model.number="localProduct.category_id"
            required
          >
            <option disabled value="">Seleccione una categoría</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="price">Precio</label>
          <input
            type="text"
            id="price"
            v-model="localProduct.price"
            required
          />
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input
            type="number"
            id="stock"
            v-model="localProduct.stock"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea
            id="description"
            v-model="localProduct.description"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="form-actions">
          <button type="button" @click="closeModal" class="cancel-button">Cancelar</button>
          <button type="submit" class="save-button">Guardar Cambios</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    categories: Array, // Recibimos las categorías desde el padre
  },
  data() {
    return {
      showModal: true,
      localProduct: { ...this.product }, // Creamos una copia local del producto
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    saveChanges() {
      // Simulación de llamada a una API para actualizar los datos del producto
      setTimeout(() => {
        console.log('Producto actualizado en el servidor:', this.localProduct);
        this.$emit('save', this.localProduct); // Emitimos el producto actualizado
        this.closeModal();
      });
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  color: #333;
  cursor: pointer;
}

.modal-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  color: #007098;
  margin-bottom: 5px;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cancel-button {
  background-color: #e74c3c;
  color: #f0f0f0;
  border: 1px solid #e74c3c;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.save-button {
  background-color: #0ea5e9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
