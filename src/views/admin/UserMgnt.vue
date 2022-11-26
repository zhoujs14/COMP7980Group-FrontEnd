<template>
  <div class="modal fade" id="userModal" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">User Management</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-start mb-4">
            <button class="btn btn-success mx-3">Add</button>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Account</th>
                <th scope="col">Id</th>
                <th scope="col">NickName</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td scope="row">12312312</td>
                <td scope="row">id id id</td>
                <td scope="row">+nickName</td>
                <td scope="row">22</td>
                <td scope="row">asjdijiqjo@qq.colm</td>
                <td scope="row">
                  <button class="btn btn-primary btn-sm mx-1">Edit</button>
                  <button class="btn btn-danger btn-sm mx-1">Delete</button>
                </td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserMgnt'
}
</script>