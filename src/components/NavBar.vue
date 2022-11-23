<template>
  <nav>
    <div>
      <a href="/" class="item">Home</a>
    </div>
    <div>
      <div class="item">Sign in</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
nav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background-color: #333;
}

.item {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

.item:hover {
  color: white;
}
</style>