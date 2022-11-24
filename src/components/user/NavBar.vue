<template>
  <!-- Nav Bar -->
  <header>
    <!-- left side -->
    <div class="item">
      <a href="/" class="item">Home</a>
      <CategorySelector />
      <a class="item" href="/Search">Search</a>
      <a class="item" href="#">Rank</a>
    </div>
    <!-- right side -->
    <div class="item" data-bs-toggle="modal" data-bs-target="#signInModal">Sign in</div>
  </header>

  <!--Sign In Modal -->
  <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label class="col-2" for="AccountField">Account</label>
              <input id="AccountField" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="col-2" for="passwordField">Password</label>
              <input id="passwordField" type="password" class="form-control" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn">Sign up</button>
          <button type="button" class="btn btn-primary">Sign In</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//顶部导航栏
//主页 种类选择 搜索 登录
import CategorySelector from './CategorySelector.vue'
import { ref } from 'vue';

export default {
  name: "NavBar",
  components: { CategorySelector },
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

form>div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>