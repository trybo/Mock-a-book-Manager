<template>
    <div class="col text-center my-3">
      <button class="btn btn-purple btn-lg" type="button">
        <slot></slot>
      </button>
    </div>
</template>

<style scoped>
.btn {
  background: #802bb1;
  color: #d1d7e0;
  width: 250px;
}

.btn:hover {
  background: #702bb1;
  color: #e1d7e0;
}
</style>