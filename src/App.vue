<template>
  <HeaderLayout />
  <router-view />
  <FooterLayout />
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import HeaderLayout from "./layouts/HeaderLayout.vue";
import FooterLayout from "./layouts/FooterLayout.vue";

export default defineComponent({
  components: {
    HeaderLayout,
    FooterLayout,
  },
});
</script>
<style lang="scss">
@import "./styles/_variables.scss";
body {
  margin: 0;
  padding: 0;
  background-image: url("./assets/planet.jpeg");
  background-repeat: no-repeat;
  background-color: black;
  color: $headerColor;
  /*   color: #dbd8e3;
 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
