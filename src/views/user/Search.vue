<template>
  <div class="home">
    <NavBar />

    <div class="row my-3">
      <div class="col-auto">
        <select>
          <option>Title</option>
          <option>Director</option>
        </select>
      </div>
      <div class="col-auto">
        <input />
      </div>
      <div class="col-auto">
        <button>Search</button>
      </div>
    </div>

    <div class="filterRow">
      <div>Date:</div>
      <a class="mx-3">24/11</a>
      <a class="mx-3">25/11</a>
      <a class="mx-3">26/11</a>
      <a class="mx-3">27/11</a>
      <a class="mx-3">28/11</a>
      <a class="mx-3">29/11</a>
      <a class="mx-3">30/11</a>
      <a class="mx-3">01/12</a>
      <a class="mx-3">02/12</a>
    </div>
    <div class="filterRow">
      <div>Category:</div>
      <a class="mx-3">Category1</a>
      <a class="mx-3">Category2</a>
      <a class="mx-3">Category3</a>
      <a class="mx-3">Category4</a>
      <a class="mx-3">Category5</a>
      <a class="mx-3">Category6</a>
    </div>
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
  components: { NavBar, MovieList },
}
</script>
<style>
.filterRow {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 12px 12px;
}

.filterRow>a {
  cursor: pointer;
}
</style>
