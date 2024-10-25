import Vuex from 'vuex';
import api from '../services/api';

export default new Vuex.Store({
  state: {
    cart: [],
    totalAmount: 0,
  },
  mutations: {
    setCart(state, products) {
      state.cart = products;
    },
    setTotalAmount(state, totalAmount) {
      state.totalAmount = totalAmount;
    },
    removeProduct(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    async fetchCartItems({ commit }) {
      try {
        const userId = localStorage.getItem('pivotId');
        if (!userId) {
          throw new Error('User ID not found in localStorage');
        }
        const response = await api.get(`/cart/${userId}`);
        commit('setCart', response.data.cart_products);
        commit('setTotalAmount', response.data.total_amount);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    },
    async removeProductFromCart({ commit, state }, productId) {
      try {
        const index = state.cart.findIndex(product => product.product_id === productId);
        if (index === -1) {
          throw new Error('Product not found in cart');
        }

        const response = await api.post('/cart/remove-product', {
          idproducttoremove: productId,
          user_id: localStorage.getItem('pivotId')
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (response.status === 200) {
          commit('removeProduct', index);

          const newTotalAmount = state.cart.reduce((total, product) => {
            return total + (product.product_price * product.quantity);
          }, 0);
          commit('setTotalAmount', newTotalAmount);
        } else {
          console.error('Error response from server:', response);
        }
      } catch (error) {
        console.error('Error removing product from cart:', error);
      }
    },
  },
  getters: {
    cartItems: (state) => state.cart,
    totalAmount: (state) => state.totalAmount,
    formattedTotalAmount: (state) => {
      return new Intl.NumberFormat('es-CR', {
        style: 'currency',
        currency: 'CRC',
      }).format(state.totalAmount);
    },
  },
});