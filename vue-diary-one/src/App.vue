<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import type { Diary } from "./components/Diary";

const isEdit = ref(false);
const editHandler = (): void => {
  isEdit.value = true;
}
const viewHandler = (): void => {
  isEdit.value = false;
}
const diary:any = ref([]);
fetch("http://127.0.0.1:8000/api/diaries/show/1")
  .then(res => res.json())
  .then((data) => (diary.value = data));

const Weather = ref(diary.weather);
const Manager = ref(diary.manager);
const SleepTime = ref(diary.sleepTime);
const Start = ref(diary.start);
const End = ref(diary.end);
const Comment = ref(diary.comment);

console.log(diary);
const addHandler = (): void => {
  diary.weather = Weather.value;
  diary.manager = Manager.value;
  diary.sleepTime = SleepTime.value;
  diary.start = Start.value;
  diary.end = End.value;
  diary.comment = Comment.value;

  viewHandler();
}

const delHandler = (): void => {
  diary.weather = "";
  diary.manager = "";
  diary.sleepTime = 0;
  diary.start = "";
  diary.end = "";
  diary.comment = "";

  viewHandler();
}


const weatherOptions: { [key: number]: string; } = {
  1: '晴れ',
  2: '曇り',
  3: '雨'
};
const managerOptions: { [key: number]: string; } = {
  1: '山田',
  2: '前田',
  3: '高田'
};
</script>

<template>
  <div class="App">
    <h2>2022年09月22日の日記</h2>
    <template v-if="isEdit == true">
      <div><button v-on:click="viewHandler" class='btn btn-primary mb-2'>戻る</button></div>
      <div class="mb-3">
        <label class="form-label" for='weather'>天気{{ diary.weather }}</label>
        <div class="row">
          <div class="col-auto">
            <select v-model="Weather" class="form-control form-select-lg" id="weather" name="weather">
              <option v-for="(label, id) in weatherOptions" v-bind:value="label">{{ label }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="manager">担当者</label>
        <div class="row">
          <div class="col-auto">
            <select v-model="Manager" class="form-control form-select-lg" id="manager" name="manager">
              <option v-for="(label, id) in managerOptions" v-bind:value="label">{{ label }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="sleep_time">睡眠時間(h)</label>
        <div class="row">
          <div class="col-auto">
            <input type="number" v-model="SleepTime" class="form-control" id="sleep_time" name="sleep_time" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="start">出社時間</label>
        <div class="row">
          <div class="col-auto">
            <input type="time" v-model="Start" class="form-control" id="start" name="start" />
          </div>
          <div class="col-auto">
            ～
          </div>
          <div class="col-auto">
            <input type="time" v-model="End" class="form-control" id="end" name="end" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="comment">コメント</label>
        <textarea v-model="Comment" class="form-control" id="comment" name="comment"></textarea>
      </div>
      <div class="row">
        <div class="col-auto">
          <button type="button" v-on:click="addHandler" class="btn btn-primary">登録する</button>
        </div>
        <div class="col-auto">
          <button type="button" v-on:click="delHandler" class="btn  btn-outline-secondary">削除する</button>
        </div>
      </div>
    </template>

    <template v-else="isEdit == false">
      <div><button v-on:click="editHandler" class='btn btn-success mb-2'>編集する</button></div>
      <div class='mb-3'>
        <label class='form-label'>天気</label>
        <p class='h3 bg-light p-3'>{{ diary.weather }}</p>
      </div>
      <div class="mb-3">
        <label class="form-label">担当者</label>
        <p class="h3 bg-light p-3">{{ diary.manager }}</p>
      </div>
      <div class="mb-3">
        <label class="form-label">睡眠時間</label>
        <p class="h3 bg-light p-3">{{ diary.sleepTime }}時間</p>
      </div>
      <div class="mb-3">
        <label class="form-label">出社時間</label>
        <p class="h3 bg-light p-3">{{ diary.start }}～{{ diary.end }}</p>
      </div>
      <div class="mb-3">
        <label class="form-label">{{ diary.comment }}</label>
        <p class="h3 bg-light p-3"></p>
      </div>
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
