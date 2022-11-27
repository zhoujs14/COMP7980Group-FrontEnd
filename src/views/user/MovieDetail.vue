<template>
  <NavBar />
  <h3 class="d-flex ms-4 mt-2">Movie Detail</h3>
  <div>
    <div class="d-flex justify-content-center">
      <img src="@/img/defaultPoster.jpg" class="img-fluid rounded-start me-5" alt="...">
      <div class="d-flex flex-column align-items-start justify-content-between">
        <h1>Title</h1>
        <div>Director:</div>
        <div>Category:</div>
        <div>Release:</div>
        <div>Introduction:</div>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#bookModal">
          Launch demo modal
        </button>
      </div>
    </div>
  </div>
  <div id="bookModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Book Ticket</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="row g-3">
            <div class="col-12">
              <label for="inputAddress" class="form-label">Title:</label>
              Title Title
            </div>
            <div class="col-md-6 d-flex flex-column">
              <label for="inputCity" class="form-label">Number of Ticket</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="col-md-6 d-flex flex-column">
              <label for="inputState" class="form-label">Payment Method</label>
              <select id="inputState" class="form-select">
                <option selected></option>
                <option>...</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavBar from '@/components/user/NavBar.vue';

export default {
  name: "MovieDetail",
  props: ["id"],
  components: { NavBar },
  setup() {

    return {
    }
  }
}
</script>
<style>

</style>
