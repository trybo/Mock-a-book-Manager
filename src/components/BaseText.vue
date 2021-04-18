<template>
    <h3 class="text-center pt-5 pb-3">
      <slot></slot>
      <span class="font-weight-bold"><slot name="purple-text"></slot></span>
    </h3>
</template>

<style scoped>
span {
  color: #802bb1;
}
</style>