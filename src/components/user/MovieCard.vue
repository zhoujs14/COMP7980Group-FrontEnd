<template>
  <div class="card m-3" @click="onClick">
    <img src="@/img/defaultPoster.jpg" class="img-fluid rounded-start mt-2" alt="...">
    <div><strong>Title</strong> </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'MovieCard',
  setup() {
    const router = useRouter()
    const onClick = () => {
      router.push('/movie/123')
    }
    return {
      onClick
    }
  }
}
</script>