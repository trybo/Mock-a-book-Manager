<template>
  <router-link to="/"><button>Add book</button></router-link>
  <router-link to="/"><button>Read books</button></router-link>
  <router-link to="/"><button>Random book</button></router-link>
  <router-link to="/"><button>a</button></router-link>
</template>

<style scoped>
button {
  padding: 0.75rem 15rem;
  margin: 10px;
  font-family: inherit;
  background-color: #ffb69f;
  border: 1px solid #ffa69f;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}
</style>