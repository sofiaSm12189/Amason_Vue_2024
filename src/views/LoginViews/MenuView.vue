<template>
  <div class="categories-card">
    <CategoryCard v-for="(category, index) in categories" :key="index" :category="category" />
  </div>
</template>

<script>
import CategoryCard from '@/components/MenuComponents/CategoryCard.vue'

export default {
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: [
        {
          title: 'Electronics',
          items: [
            { title: 'Phone', img: 'phone.jpg' },
            { title: 'Laptop', img: 'laptop.jpg' },
            { title: 'Headphones', img: 'headphones.jpg' },
            { title: 'Camera', img: 'camera.jpg' }
          ]
        },
        {
          title: 'Clothing',
          items: [
            { title: 'T-shirt', img: 'tshirt.jpg' },
            { title: 'Jeans', img: 'jeans.jpg' },
            { title: 'Jacket', img: 'jacket.jpg' },
            { title: 'Shoes', img: 'shoes.jpg' }
          ]
        },
        {
          title: 'Books',
          items: [
            { title: 'Fiction', img: 'fiction.jpg' },
            { title: 'Science', img: 'science.jpg' },
            { title: 'Biography', img: 'biography.jpg' },
            { title: 'Fantasy', img: 'fantasy.jpg' }
          ]
        },
        {
          title: 'Toys & Games',
          items: [
            { title: 'Board Games', img: 'boardgames.jpg' },
            { title: 'Action Figures', img: 'actionfigures.jpg' },
            { title: 'Puzzles', img: 'puzzles.jpg' },
            { title: 'Dolls', img: 'dolls.jpg' }
          ]
        },
        {
          title: 'Automotive',
          items: [
            { title: 'Car Tires', img: 'tires.jpg' },
            { title: 'Engine Oil', img: 'engineoil.jpg' },
            { title: 'Car Mats', img: 'carmats.jpg' },
            { title: 'Seat Covers', img: 'seatcovers.jpg' }
          ]
        },
        {
          title: 'Beauty & Personal Care',
          items: [
            { title: 'Makeup', img: 'makeup.jpg' },
            { title: 'Skincare', img: 'skincare.jpg' },
            { title: 'Haircare', img: 'haircare.jpg' },
            { title: 'Perfume', img: 'perfume.jpg' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.categories-card {
  display: flex;
  margin-top: 17vh;
  margin-left: 1vh;
  margin-right: 1vh;
  margin-bottom: 6vh;
  flex-wrap: wrap;
  width: auto;
  background-color: transparent;
  padding: 2.4% 3%;
  gap: 20px;
  justify-content: space-around;
  overflow: hidden;
}
</style>
