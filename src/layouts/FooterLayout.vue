<template>
  <footer>
    <section class="footerTextWrapper">
      <div class="border">
        <article class="footerText">
          <p>LOREM</p>
          <p>LOREM IPSUM</p>
        </article>
        <article class="footerText">
          <p>LOREM IPSUM</p>
          <p>LOREM IPSUM</p>
          <p>LOREM IPSUM</p>
          <p>LOREM IPSUM</p>
        </article>
        <article class="footerText">
          <p>LOREM IPSUM</p>
          <p>LOREM IPSUM</p>
          <p>LOREM IPSUM</p>
        </article>
        <article class="footerText">
          <p>LOREM IPSUM</p>
          <p>LOREM IPSUM</p>
          <p>LOREM IPSUM</p>
        </article>
      </div>
    </section>
    <section class="iconsContainer">
      <article class="footerIcons">
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-twitter"></i>
      </article>
      <article class="iconText"><p>LOREM IPSUM LOREM IPSUM</p></article>
    </section>
  </footer>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "styles/_variables.scss";

footer {
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)
    ),
    url("../assets/galaxy6.jpeg");
  background-position: 50% 6%;
  margin-top: 30vh;
  height: 200px;
  display: flex;
  flex-direction: column;

  .footerTextWrapper {
    margin-top: 20px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .border {
      display: flex;
      justify-content: space-evenly;
      width: 85%;
      border-bottom: 2px solid $darkGreen;

      .footerText {
        font-size: 8pt;
      }
    }
  }

  .iconsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;

    .footerIcons {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;

      i {
        font-size: 17pt;
      }
    }
    .iconText {
      font-size: 6pt;
    }
  }
}
</style>
