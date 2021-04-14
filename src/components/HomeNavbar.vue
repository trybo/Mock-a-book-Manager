<template>
<div class="container">
  <div class="col text-center my-3"><router-link to="/addbook"><button class="btn btn-purple btn-lg" type="button">Add book</button></router-link></div>
  <div class="col text-center my-3"><router-link to="/readbooks"><button class="btn btn-purple btn-lg" type="button">Read books</button></router-link></div>
  <div class="col text-center my-3"><router-link to="/randombook"><button class="btn btn-purple btn-lg" type="button">Random book</button></router-link></div>
</div>
</template>

<style scoped>
.btn {
  background: #802BB1;
  color: #D1D7E0;;
  width: 250px;
}

.btn:hover {
  background: #702BB1;
  color: #E1D7E0;;
}
</style>