<script setup lang="ts">
import { ref  } from "vue";
import type { Diary } from "../interfaces";

interface Props {
    diary: Diary;
}
const props = defineProps<Props>();

interface Emits {
    (event: "onStop") : void;
}
const emit = defineEmits<Emits>();

const inputWeather = ref(props.diary.weather);
const inputManager = ref(props.diary.manager);
const inputSleepTime = ref(props.diary.sleepTime);
const inputStart = ref(props.diary.start);
const inputEnd = ref(props.diary.end);
const inputComment = ref(props.diary.comment);

const addHandler = (): void => {
    props.diary.weather = inputWeather.value;
    props.diary.manager = inputManager.value;
    props.diary.sleepTime = inputSleepTime.value;
    props.diary.start = inputStart.value;
    props.diary.end = inputEnd.value;
    props.diary.comment = inputComment.value;

    emit("onStop");
}

const delHandler = (): void => {
    props.diary.weather = "";
    props.diary.manager = "";
    props.diary.sleepTime = 0;
    props.diary.start = "";
    props.diary.end = "";
    props.diary.comment = "";

    emit("onStop");
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
    <div class="mb-3">
        <label class="form-label" for='weather'>天気{{diary.weather}}</label>
        <div class="row">
            <div class="col-auto">
                <select v-model="inputWeather" class="form-control form-select-lg" id="weather" name="weather">
                    <option v-for="(label, id) in weatherOptions" v-bind:value="label">{{label}}
                    </option>
                </select>
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label class="form-label" for="manager">担当者</label>
        <div class="row">
            <div class="col-auto">
                <select v-model="inputManager" class="form-control form-select-lg" id="manager" name="manager">
                    <option v-for="(label, id) in managerOptions" v-bind:value="label">{{label}}
                    </option>
                </select>
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label class="form-label" for="sleep_time">睡眠時間(h)</label>
        <div class="row">
            <div class="col-auto">
                <input type="number" v-model="inputSleepTime" class="form-control" id="sleep_time" name="sleep_time" />
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label class="form-label" for="start">出社時間</label>
        <div class="row">
            <div class="col-auto">
                <input type="time" v-model="inputStart" class="form-control" id="start" name="start" />
            </div>
            <div class="col-auto">
                ～
            </div>
            <div class="col-auto">
                <input type="time" v-model="inputEnd" class="form-control" id="end" name="end" />
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label class="form-label" for="comment">コメント</label>
        <textarea v-model="inputComment" class="form-control" id="comment" name="comment"></textarea>
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
