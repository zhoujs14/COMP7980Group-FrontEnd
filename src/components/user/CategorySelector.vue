<template>
  <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div id="category" class="item">Category</div>
    <div v-if="categoriesVisible" class="categories">
      <a class="categoryLink d-block col-4" v-for="(item, index) in categories" :key="index"
        @click="() => onClick(item)">{{ item
        }}</a>
    </div>
  </div>
</template>
<script>
// 选取电影类别 跳转类别页面
import { ref,watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: "CategorySelector",
  setup() {
    const categoriesVisible = ref(false)
    const categories = ref(["All", "Action", "Biography", "Crime", "Family", "Horror",
      "Romance", "Sports", "War", "Adventure", "Comedy", "Documentary", "Fantasy", "Thriller",
      "Animation", "Costume", "Drama", "History", "Musical", "Psychological"])


    const onMouseEnter = () => {
      categoriesVisible.value = true
      document.getElementById('category').style.backgroundColor = 'rgb(255, 248, 248)'
      document.getElementById('category').style.color = 'black'
    }
    const onMouseLeave = () => {
      categoriesVisible.value = false
      document.getElementById('category').style.backgroundColor = '#333'
      document.getElementById('category').style.color = 'white'
    }

    const router = useRouter()
    const onClick = (item) => {
      router.push(`/category/`+item)
    }

    return {
      categories,
      categoriesVisible,
      onMouseEnter,
      onMouseLeave,
      onClick
    }
  },
}
</script>
<style>
.categories {
  display: flex;
  max-width: 350px;
  padding: 12px;
  position: absolute;
  flex-wrap: wrap;
  background-color: rgb(255, 248, 248);
  z-index: 999;
}

.categoryLink {
  text-decoration: none;
  color: black;
  font-size: 14px;
  text-align: left;
}
</style>