<template>
            <div class="mb-3">
                <label class="form-label" for='weather'>天気</label>
                <div class="row">
                    <div class="col-auto">
                        <select class="form-control form-select-lg" id="weather" name="weather" >
                            <option>晴れ</option>
                            <option>曇り</option>
                            <option>雨</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="manager">担当者</label>
                <div class="row">
                    <div class="col-auto">
                        <select class="form-control form-select-lg" id="manager" name="manager">
                            <option>山田</option>
                            <option>前田</option>
                            <option>高田</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="sleep_time">睡眠時間(h)</label>
                <div class="row">
                    <div class="col-auto">
                        <input type="number" class="form-control" id="sleep_time" name="sleep_time" />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="start">出社時間</label>
                <div class="row">
                    <div class="col-auto">
                        <input type="time" class="form-control" id="start" name="start" />
                    </div>
                    <div class="col-auto">
                        ～
                    </div>
                    <div class="col-auto">
                        <input type="time" class="form-control" id="end" name="end" />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="comment">コメント</label>
                <textarea class="form-control" id="comment" name="comment" ></textarea>
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
