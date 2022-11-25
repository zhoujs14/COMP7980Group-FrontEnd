<template>
  <div style="height:40px"></div>
  <!-- Nav Bar -->
  <header>
    <!-- left side -->
    <div class="item">
      Management System
    </div>
    <!-- right side -->
    <div class="item">Log out</div>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "NavBar",
  setup() {

    return {

    }
  }
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  overflow: visible;
  z-index: 999;
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

form>div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

label {
  text-align: right;
  margin-right: 8px;
}
</style>