<template>
  <main class="home">
    <ShowTodos />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShowTodos from "./todos/ShowTodos.vue";
export default defineComponent({
  components: {
    ShowTodos,
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
