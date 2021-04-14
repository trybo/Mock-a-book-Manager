<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">Mock-a-book</a>
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
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/addbook">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/readbooks">Read Books</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/randombook">Random Book</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <!-- <header>
    <nav>
      <h1>
        <router-link to="/">BooksManager</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/addbook">Add Book</router-link>
        </li>
        <li>
          <router-link to="/readbooks">Read Books</router-link>
        </li>
        <li>
          <router-link to="/randombook">Random Book</router-link>
        </li>
      </ul>
    </nav>
  </header> -->
</template>

<style scoped>
.navbar {
  background-color: #802bb1;
}

/* header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 a {
  color: rgb(0, 0, 0);
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
} */
</style>