<template>
  <section class="formContainer">
    <form class="todoForm" @submit.prevent="handleSubmit">
      <div class="separate">
        <label for="title">Title:</label>
        <input v-model="title" id="title" type="text" />
      </div>
      <div class="separate">
        <label for="needToBeDoneAt">When should this be done ?</label>
        <input v-model="needToBeDoneAt" id="needToBeDoneAt" type="date" />
      </div>
      <button>Create</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { setTodo } from "../../composables/todoCRUD";
import { ITodo } from "../../models/ITodo";
export default defineComponent({
  setup() {
    const title = ref("");
    const needToBeDoneAt = ref("");
    let id = "";

    const uid = function () {
      id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    const translateDate = (d: string) => {
      let newDate = new Date(d);
      let translateDate = newDate.toLocaleDateString("EN-US", {
        month: "long",
        day: "2-digit",
      });

      console.log("translate", translateDate);
      return translateDate;
    };

    const handleSubmit = () => {
      uid();
      const createdTodo: ITodo = {
        id: "",
        title: "",
        needToBeDoneAt: "",
        isDone: false,
      };

      createdTodo.title = title.value;
      // createdTodo.needToBeDoneAt = needToBeDoneAt.value;
      createdTodo.id = id;
      createdTodo.needToBeDoneAt = translateDate(needToBeDoneAt.value);
      console.log("created", createdTodo);

      setTodo(createdTodo);
    };

    return { title, needToBeDoneAt, handleSubmit };
  },
});
</script>

<style lang="scss" scoped>
.formContainer {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .todoForm {
    color: #dbd8e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 27px;
    width: 50%;

    .separate {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3px;

      input {
        color: white;
        border-radius: 10px;
        height: 20px;
        background-color: rgba(#a2a8d3, 0.7);
        border: 1px solid #113f67;
      }
    }
    button {
      color: #dbd8e3;
      width: 80px;
      height: 22px;
      border-radius: 10px;
      background-color: #113f67;
      border: 1px solid #113f67;
      box-shadow: 3px 2px 20px 4px #dbd8e3;
    }
  }
}
</style>
