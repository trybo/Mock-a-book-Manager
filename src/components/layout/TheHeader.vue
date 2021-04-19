<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand ml-3" to="/">
      <img
        src="../../assets/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
      />
      Mock-a-book
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mr-3">
        <li class="nav-item mx-2">
          <router-link class="nav-link" to="/readbooks">Books</router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link class="nav-link" to="/randombook"
            >Random Book</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #802bb1;
}

a:active,
a:hover,
a.router-link-active {
  color: #d1d7e0;
  font-weight: bold;
}

.navbar-brand:active,
.navbar-brand:hover,
.navbar-brand.router-link-active {
  border-color: transparent;
}
</style>