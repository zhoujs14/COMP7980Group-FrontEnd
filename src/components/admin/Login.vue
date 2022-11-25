<template>
  <div class="container">
    <div class="card p-5 mt-6">
      <h1>Sign in</h1>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label>Account</label>
          <input class="form-control" name="account" />
        </div>
        <div class="mb-3">
          <label>Pccount</label>
          <input class="form-control" name="password" />
        </div>
        <button class="btn btn-primary">Sign in</button>
      </form>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
export default {
  name: "AdminLogin",
  props: ['onLogin'],
  setup() {
    const form = ref({})

    const onSubmit = async () => {
      let res = await fetch('/api/admin/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
      })

      if (res.ok) {
        onLogin()
      }
      else alert(res.statusText)
    }

    return {
      form,
      onSubmit
    }
  }
}
</script>

