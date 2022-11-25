<template>
  <AdminLogin v-if="!isLogin" :onLogin="onLogin" />
  <div v-else>
    <NavBar />
    <div style="height:40px"></div>
    <div class="container">
      <div class="row w-100">
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
          <div class="card-header">Users</div>
          <div class="card-body text-secondary">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <div class="card-header w-100">Categories</div>
          <div class="card-body text-success">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
        <div class="card border-warning mb-3" style="max-width: 18rem;">
          <div class="card-header w-100">Movies</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
        <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header">Tickets</div>
          <div class="card-body text-dark">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row card">
      <div style="height:600px"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AdminLogin from '@/components/admin/Login.vue'
import NavBar from '@/components/admin/NavBar.vue'
export default {
  name: "AdminHome",
  components: { AdminLogin, NavBar },
  setup() {
    const isLogin = ref(true)

    const onLogin = () => {
      isLogin.value = true
    }

    onMounted(() => {
      console.log('isLoginL:', isLogin.value)
    })

    return {
      isLogin,
      onLogin
    }
  }
}
</script>