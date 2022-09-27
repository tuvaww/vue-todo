<template>
  <section class="detailsContainer">
    <article class="infoContainer">
      <div class="closeModalContainer">
        <p>CLOSE</p>
      </div>
      <h4>TODO TITEl</h4>

      <div class="checkboxContainer">
        <label for="checkbox">Click to edit</label>
        <input v-model="checkbox" id="checkbox" type="checkbox" />
      </div>

      <div class="infoOfTodo" v-if="!checkbox">
        <div class="shorterInfo">
          <p><b>Date:</b> 2002/06/16</p>
          <p><b>Id:</b> 2</p>
          <p><b>Is done:</b> fale</p>
        </div>
        <p>
          <b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Saepe vel, magni repellat ratione molestias culpa ipsum non
          earum minima repellendus officiis eos? Voluptas odit, doloremque
          veritatis doloribus culpa temporibus tempore. Consequuntur consequatur
          laudantium ex officia, nostrum dolores vitae ut dicta est quibusdam
          aspernatur corporis
        </p>
      </div>

      <form action="post" v-else>
        <div class="separate">
          <label for="title">Change title</label>
          <input id="title" type="text" placeholder="title" />
        </div>
        <div class="separate">
          <label for="isDone">Change if completed</label>
          <input id="isDone" type="text" placeholder="isDone" />
        </div>
        <div class="separate">
          <label for="date">Change date</label>
          <input id="date" type="date" />
        </div>
        <div class="separate">
          <label for="desc">Change date</label>
          <textarea id="desc" placeholder="Max 300 characters"></textarea>
        </div>
      </form>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const checkbox = ref(false);

    return { checkbox };
  },
});
</script>

<style lang="scss" scoped>
@import "styles/_variables.scss";
@import "styles/_mixins.scss";
.detailsContainer {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;

  .infoContainer {
    background-image: url("../assets/earth.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    //height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $headerColor;
    position: relative;

    .closeModalContainer {
      background-image: url("../assets/moon.png");
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      border-radius: 50%;
      top: -10px;
      left: 400px;
      width: 60px;
      height: 60px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      color: $darkGreen;
      cursor: pointer;
    }

    h4 {
      color: $headerColor;
      text-shadow: 8px 10px 3px black;
    }
    .checkboxContainer {
      label {
        font-weight: bolder;
        color: $smallHeaderColor;
      }
    }
    .infoOfTodo {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      .shorterInfo {
        width: 35%;
        display: flex;

        flex-direction: column;
        gap: 7px;
      }
      p {
        color: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
        /*  rgb(238, 144, 51); */
        margin: 0;
        max-width: 80%;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 15px;

      .separate {
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: white;

        ::placeholder {
          color: white;
          opacity: 1;
        }
        input,
        textarea {
          width: 250px;
          color: white;
          border-radius: 10px;
          height: 20px;
          background-color: rgba($lightGreen, 0.7);
          border: 1px solid $darkGreen;
        }

        textarea {
          height: 150px;
        }
      }
    }
  }
}
</style>
