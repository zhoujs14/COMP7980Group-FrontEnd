<template>
  <div class="card" @click="onClick">
    <div class="poster w-100">poster</div>
    <div>Movie Name</div>
    <div class="btnRow">
      <div class="column">Release Time</div>
      <div class="column">Rate</div>
    </div>
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

<style>
.card {
  background-color: grey;
  align-items: center;
  margin: 16px;
  cursor: pointer;
}

.btnRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.poster {
  display: flex;
  border-bottom: 1px solid gray;
  height: 230px;
  justify-content: center;
  align-items: center;
  background-color: grey;
}
</style>