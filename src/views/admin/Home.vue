<template>
  <AdminLogin v-if="!isLogin" :onLogin="onLogin" />
  <div v-else>
    <NavBar />
    <div style="height:40px"></div>
    <!-- Admin Menu -->
    <div class="container">
      <!-- Cards with management functions -->
      <h2 class="row d-block" style="text-align:left">Management Cards</h2>
      <div id="cardRow">
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
          <div class="card-header w-100">Users</div>
          <div class="card-body text-secondary">
            <h5 class="card-title"><strong>1000</strong> users in the system</h5>
            <p class="card-text">Click the button below to manager users in the system</p>
            <button class="btn btn-secondary">Manage</button>
          </div>
        </div>
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <div class="card-header w-100">Categories</div>
          <div class="card-body text-success">
            <h5 class="card-title"><strong>25</strong> Categories now</h5>
            <p class="card-text">Click the button below to manager Categories in the system</p>
            <button class="btn btn-success">Manage</button>
          </div>
        </div>
        <div class="card border-warning mb-3" style="max-width: 18rem;">
          <div class="card-header w-100">Movies</div>
          <div class="card-body">
            <h5 class="card-title"><strong>1234</strong> movies in the system</h5>
            <p class="card-text">Click the button below to manager Movies in the system</p>
            <button class="btn btn-warning">Manage</button>
          </div>
        </div>
        <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header w-100">Tickets</div>
          <div class="card-body text-dark">
            <h5 class="card-title"><strong>154854</strong> tiket sold</h5>
            <p class="card-text">Click the button below to manager tikets in the system</p>
            <button class="btn btn-secondary">Manage</button>
          </div>
        </div>
      </div>
      <!-- Statistic Area -->
      <h2 class="my-4" style="text-align:left">Statistic</h2>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-user-tab" data-bs-toggle="tab" data-bs-target="#nav-user"
            type="button" role="tab" aria-controls="nav-user" aria-selected="true">User</button>
          <button class="nav-link" id="nav-movies-tab" data-bs-toggle="tab" data-bs-target="#nav-movies" type="button"
            role="tab" aria-controls="nav-movies" aria-selected="false">Movies</button>
          <button class="nav-link" id="nav-tickets-tab" data-bs-toggle="tab" data-bs-target="#nav-tickets" type="button"
            role="tab" aria-controls="nav-tickets" aria-selected="false">Tickets</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-user" role="tabpanel" aria-labelledby="nav-user-tab">statistic
          for users
          <Chart />
        </div>
        <div class="tab-pane fade" id="nav-movies" role="tabpanel" aria-labelledby="nav-movies-tab">statistic for movies
        </div>
        <div class="tab-pane fade" id="nav-tickets" role="tabpanel" aria-labelledby="nav-tickets-tab">statistic for
          tickets</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AdminLogin from '@/components/admin/Login.vue'
import NavBar from '@/components/admin/NavBar.vue'
import Chart from '@/components/admin/Chart.vue'
export default {
  name: "AdminHome",
  components: { AdminLogin, NavBar, Chart },
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
<style>
#cardRow {
  display: flex;
  flex-wrap: wrap;
}
</style>