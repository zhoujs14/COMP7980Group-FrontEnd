<template>
  <div class="home">
    <NavBar />
    <div class="container mb-3">
      <Carousel class="mb-3" />
      <MovieList />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Carousel from '../components/Carousel.vue';
import MovieList from '../components/MovieList.vue';

export default {
  name: "Home",
  components: { NavBar, Carousel, MovieList }
}
</script>
