<template>
  <h2>{{ title }}</h2>
  <div class="row">
    <MovieCard v-for="(item, index) in movies" :key="index" class="col-4 col-md-3 col-lg-2" />
  </div>
  <div class="pagination">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import MovieCard from './MovieCard.vue';

export default {
  name: "MovieList",
  components: { MovieCard },
  props: ['title'],
  setup() {
    const movies = ref([1, 1, 1, 1, 1, 1, 1])

    return {
      movies
    }
  }
}
</script>

<style>
.row {
  justify-content: center;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
