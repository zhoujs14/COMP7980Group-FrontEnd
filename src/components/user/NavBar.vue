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
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="m-4">
            <div class="mb-3">
              <label class="col-2" for="AccountField1">Account</label>
              <input id="AccountField1" type="text" class="form-control" v-model="signInForm.account" />
            </div>
            <div class="mb-3">
              <label class="col-2" for="passwordField1">Password</label>
              <input id="passwordField1" type="password" class="form-control" v-model="signInForm.password" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-target="#signUpModal" data-bs-toggle="modal">Sign up</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="onSignIn">Sign In</button>
        </div>
      </div>
    </div>
  </div>

  <!--Sign Up Modal -->
  <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <span>Register</span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="" class="m-4">
            <div class="mb-3">
              <label class="col-2" for="AccountField2">Account</label>
              <input necessary id="AccountField2" type="text" class="form-control" v-model="signUpForm.account" />
            </div>
            <div class="mb-3">
              <label class="col-2" for="passwordField2">Password</label>
              <input id="passwordField2" type="password" class="form-control" v-model="signUpForm.password" />
            </div>
            <div class="mb-3">
              <label class="col-2" for="nickNameField">NickName</label>
              <input id="nickNameField" type="text" class="form-control" v-model="signUpForm.nickName" />
            </div>
            <div class="mb-3">
              <label class="col-2" for="emailField">Email</label>
              <input id="emailField" type="email" class="form-control" v-model="signUpForm.email" />
            </div>
            <div class="mb-3">
              <label class="col-2" for="ageField">Age</label>
              <input id="ageField" type="number" class="form-control" :min="0" :max="200" v-model="signUpForm.age" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary2" data-bs-target="#signUpModal" data-bs-toggle="modal"
            @click="onSignUp">Sign
            up</button>
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
    const signInForm = ref({})
    const signUpForm = ref({})

    const onSignIn = () => {
      alert('sign in' + JSON.stringify(signInForm.value))
    }

    const onSignUp = () => {
      alert('sign up' + JSON.stringify(signUpForm.value))
    }

    return {
      signInForm,
      signUpForm,
      onSignIn,
      onSignUp
    }
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

label {
  text-align: right;
  margin-right: 8px;
}
</style>