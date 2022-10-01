<script setup lang="ts">
import { ref } from "vue";
import DiaryForm from "./components/DiaryForm.vue";
import DiaryView from "./components/DiaryView.vue";

const isEdit = ref(false);
const editHandler = (): void => {
  isEdit.value = true;
}
const viewHandler = (): void => {
  isEdit.value = false;
}

const diary = ref({
  weather: "雨",
  manager: "山田",
  sleepTime: 9,
  start: "10:00",
  end: "17:00",
  comment: "はじめまして。"
});

</script>


<template>
  <div class="App">
    <h2>2022年09月22日の日記</h2>
    <template v-if="isEdit == true">
      <div><button v-on:click="viewHandler" class='btn btn-primary mb-2'>戻る</button></div>
      <DiaryForm v-bind:diary="diary" />
    </template>
    <template v-else="isEdit == false">
        <div><button v-on:click="editHandler" class='btn btn-success mb-2'>編集する</button></div>
        <DiaryView v-bind:diary="diary" />
    </template>
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
