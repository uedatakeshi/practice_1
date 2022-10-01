<script setup lang="ts">
import {ref} from "vue";
import DiaryForm from "./components/DiaryForm.vue";
import DiaryView from "./components/DiaryView.vue";

const diary = ref({
  weather:"雨",
    manager:"山田",
    sleepTime:9,
    start:"10:00",
    end:"17:00",
    comment:"はじめまして。"
});

</script>


<template>
  <div class="App">
    <h2>2022年09月22日の日記</h2>
    <div>
      <div><button class='btn btn-primary mb-2'>戻る</button></div>
      <DiaryForm />
    </div>
  </div>
  <div>
    <div><button class='btn btn-success mb-2'>編集する</button></div>
    <DiaryView v-bind:diary="diary" />
  </div>



  <div class="wrapper">
    <HelloWorld msg="You did it!" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
