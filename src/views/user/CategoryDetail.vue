<template>
  <NavBar />
  <h1>{{ title }}</h1>
  <hr />
  <MovieList />
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MovieList from '../../components/user/MovieList.vue';
import NavBar from '../../components/user/NavBar.vue';

export default {
  name: "CategoryDetail",
  components: { NavBar, MovieList },
  setup() {
    const title = ref('')
    const route = useRoute()
    title.value = route.params.name

    return {
      title
    }
  }
}
</script>
