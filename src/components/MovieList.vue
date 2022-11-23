<template>
  <div class="row">
    <MovieCard class="col-2" />
    <MovieCard class="col-2" />
    <MovieCard class="col-2" />
    <MovieCard class="col-2" />
    <MovieCard class="col-2" />
    <MovieCard class="col-2" />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: "MovieList",
  components: { MovieCard }
}
</script>

<style>
.row {
  justify-content: center;
}
</style>
