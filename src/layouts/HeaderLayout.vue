<template>
  <nav>
    <router-link class="navLink" to="/">Home</router-link>
    <router-link class="navLink" :to="{ name: 'newTodo' }"
      >New Todo</router-link
    >
  </nav>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style lang="scss" scoped>
nav {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .navLink {
    font-size: 18pt;
    color: #dbd8e3;
    text-decoration: none;
    font-weight: bolder;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
