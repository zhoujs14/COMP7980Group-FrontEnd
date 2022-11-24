<template>
  <div class="home">
    <NavBar />
    <div class="container mb-3">
      <MovieList />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/NavBar.vue';
import MovieList from '@/components/user/MovieList.vue';

export default {
  name: "Search",
  components: { NavBar, MovieList }
}
</script>
