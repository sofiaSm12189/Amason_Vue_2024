<template>
  <div class="categories-card">
    <CategoryCard
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
      @category-selected="goToProductList"
    />
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
          title: 'Tecnología',
          categoryId: 1,
          items: [
            { title: 'Phone', img: 'phone.jpg',  },
            { title: 'Laptop', img: 'laptop.jpg' },
            { title: 'Headphones', img: 'headphones.jpg' },
            { title: 'Camera', img: 'camera.jpg' }
          ]
        },
        

      ]
    }
  },
  methods: {
  goToProductList(category) {
    this.$router.push({
      name: 'ProductList',
      query: { categoryId: category.categoryId, title: category.title } // Cambiado a `categoryId`
    });
  }
}

}
</script>

<style scoped>
.categories-card {
  display: flex;
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
