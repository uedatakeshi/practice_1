<script setup lang="ts">
    import type { Diary } from './Diary';
    interface Props {
        diary: Diary;
    }
    defineProps<Props>();
</script>


<template>
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
