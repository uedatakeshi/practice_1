<script setup lang="ts">
import { ref } from "vue";
import type { Diary } from "./components/Diary";

const isEdit = ref(false);
const editHandler = (): void => {
  isEdit.value = true;
}
const viewHandler = (): void => {
  isEdit.value = false;
}
const diary: any = ref({});
const Weather = ref('');
const Manager = ref('');
const SleepTime = ref('0');
const Start = ref('');
const End = ref('');
const Comment = ref('');

fetch("http://127.0.0.1:8000/api/diaries/show/1")
  .then(res => res.json())
  .then((data) => {
    diary.value = data;
    Weather.value = diary.value.weather;
    Manager.value = diary.value.manager;
    SleepTime.value = diary.value.sleep_time;
    Start.value = diary.value.start;
    End.value = diary.value.end;
    Comment.value = diary.value.comment;
  })

const addHandler = (): void => {

  diary.value.sleep_time = SleepTime.value;
  diary.value.weather = Weather.value;
  diary.value.manager = Manager.value;
  diary.value.start = Start.value;
  diary.value.end = End.value;
  diary.value.comment = Comment.value;

  // Default options are marked with *
  const response = fetch("http://127.0.0.1:8000/api/diaries/update/1", {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(diary.value) // body data type must match "Content-Type" header
  });
  console.log(response)

  viewHandler();
}

const delHandler = (): void => {
  diary.value.weather = "";
  diary.value.manager = "";
  diary.value.sleepTime = 0;
  diary.value.start = "";
  diary.value.end = "";
  diary.value.comment = "";

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
        <p class="h3 bg-light p-3">{{ diary.sleep_time }}時間</p>
      </div>
      <div class="mb-3">
        <label class="form-label">出社時間</label>
        <p class="h3 bg-light p-3">{{ diary.start }}～{{ diary.end }}</p>
      </div>
      <div class="mb-3">
        <label class="form-label">コメント</label>
        <p class="h3 bg-light p-3">{{ diary.comment }}</p>
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
