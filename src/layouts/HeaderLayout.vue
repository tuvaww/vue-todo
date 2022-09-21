<template>
  <nav>
    <!--     <div class="planetContainer"></div>
 -->
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
@import "styles/_variables.scss";
nav {
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)
    ),
    url("../assets/galaxy6.jpeg");
  background-position: 50% 5%;

  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .planetContainer {
    background-image: url("../assets/planet.jpeg");
    height: 100%;
    width: 30%;
  }

  .navLink {
    font-size: 18pt;
    color: $headerColor;

    text-decoration: none;
    font-weight: bolder;

    &:hover {
      border-bottom: 1px solid $headerColor;
    }
  }
}
</style>
