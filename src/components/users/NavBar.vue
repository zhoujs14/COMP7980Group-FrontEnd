<template>
  <header>
    <!-- left side -->
    <div class="item">
      <a href="/" class="item">Home</a>
      <CategorySelector />
      <a class="item">Search</a>
    </div>
    <!-- right side -->
    <div class="item">Sign in</div>
  </header>
</template>

<script>
//顶部导航栏
//主页 种类选择 搜索 登录
import Search from './Search.vue';
import CategorySelector from './CategorySelector.vue'
import { ref } from 'vue';

export default {
  name: "NavBar",
  components: { Search, CategorySelector },
  setup() {
    return {}
  }
}
</script>

<style>
header {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  overflow: visible;
}

.item {
  height: 50px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

.item:hover {
  color: white;
}
</style>