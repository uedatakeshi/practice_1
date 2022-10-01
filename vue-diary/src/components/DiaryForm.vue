<script setup lang="ts">
import type { Diary } from './Diary';
interface Props {
    diary: Diary;
}
defineProps<Props>();

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
        <label class="form-label" for='weather'>天気</label>
        <div class="row">
            <div class="col-auto">
                <select v-model="diary.weather" class="form-control form-select-lg" id="weather" name="weather">
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
                <select v-model="diary.manager" class="form-control form-select-lg" id="manager" name="manager">
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
                <input type="number" v-model="diary.sleepTime" class="form-control" id="sleep_time" name="sleep_time" />
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label class="form-label" for="start">出社時間</label>
        <div class="row">
            <div class="col-auto">
                <input type="time" v-model="diary.start" class="form-control" id="start" name="start" />
            </div>
            <div class="col-auto">
                ～
            </div>
            <div class="col-auto">
                <input type="time" v-model="diary.end" class="form-control" id="end" name="end" />
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label class="form-label" for="comment">コメント</label>
        <textarea v-model="diary.comment" class="form-control" id="comment" name="comment"></textarea>
    </div>
    <div class="row">
        <div class="col-auto">
            <button type="button" class="btn btn-primary">登録する</button>
        </div>
        <div class="col-auto">
            <button type="button" class="btn  btn-outline-secondary">削除する</button>
        </div>
    </div>

</template>
