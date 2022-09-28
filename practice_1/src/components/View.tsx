import React from 'react'
import { Diary } from '../Diary';

type diaryProps = {
    diaries: Diary;
}


const View  = ({diaries}: diaryProps) => {

    return (
        <div>
            <div className='mb-3'>
                <label className='form-label'>天気</label>
                <p className='h3 bg-light p-3'>{diaries.weather}</p>
            </div>
            <div className="mb-3">
                <label className="form-label">担当者</label>
                <p className="h3 bg-light p-3">{diaries.manager}</p>
            </div>
            <div className="mb-3">
                <label className="form-label">睡眠時間</label>
                <p className="h3 bg-light p-3">{diaries.sleep_time}時間</p>
            </div>
            <div className="mb-3">
                <label className="form-label">出社時間</label>
                <p className="h3 bg-light p-3">{diaries.start}～{diaries.end}</p>
            </div>
            <div className="mb-3">
                <label className="form-label">コメント</label>
                <p className="h3 bg-light p-3">{diaries.comment}</p>
            </div>

        </div>
    )
}

export default View