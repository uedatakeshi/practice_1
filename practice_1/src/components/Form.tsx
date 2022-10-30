import React,  { Dispatch, SetStateAction } from 'react';
import { Diary } from '../Diary';
import { useRef } from 'react';

interface diaryProps {
    diaries: Diary,
    setDiaries: Dispatch<SetStateAction<Diary>>,
    onStop: () => void,
}

const Form  = (props: diaryProps) => {


    const IdRef = useRef<HTMLInputElement>(document.createElement("input"));
    const WeatherRef = useRef<HTMLSelectElement>(null);
    const ManagerRef = useRef<HTMLSelectElement>(document.createElement("select"));
    const SleeptimeRef = useRef<HTMLInputElement>(document.createElement("input"));
    const StartRef = useRef<HTMLInputElement>(document.createElement("input"));
    const EndRef = useRef<HTMLInputElement>(document.createElement("input"));
    const CommentRef = useRef<HTMLTextAreaElement>(document.createElement("textarea"));

    const handleAddDiary = () => {
        if (window.confirm("よろしいですか？")) {
            const data = { 
                id: Number(IdRef.current.value),
                weather: (WeatherRef.current ? WeatherRef.current.value : ""),
                manager: ManagerRef.current.value,
                sleep_time: Number(SleeptimeRef.current.value),
                start: StartRef.current.value,
                end: EndRef.current.value,
                comment: CommentRef.current.value,
            };
            props.setDiaries(data);

                // Default options are marked with *
                const response = fetch("http://127.0.0.1:8000/api/diaries/update/1", {
                  method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                  headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                console.log(response); // parses JSON response into native JavaScript objects


            props.onStop();
        }
    }
    const weatherOptions = [
        { id:1, value: '晴れ', label: '晴れ' },
        { id:2, value: '曇り', label: '曇り' },
        { id:3, value: '雨', label: '雨' },
    ];
    const managerOptions = [
        { id:1, value: '山田', label: '山田' },
        { id:2, value: '前田', label: '前田' },
        { id:3, value: '高田', label: '高田' },
    ];

    return (
        <div>
                        <input type="hidden" defaultValue={props.diaries.id}
                            ref={IdRef} name="id" />

            <div className="mb-3">
                <label className="form-label" htmlFor='weather'>天気</label>
                <div className="row">
                    <div className="col-auto">
                        <select ref={WeatherRef} defaultValue={props.diaries.weather} className="form-control form-select-lg" id="weather" name="weather" >
                            {weatherOptions.map((d, i) => <option key={i} value={d.value}>{d.label}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="manager">担当者</label>
                <div className="row">
                    <div className="col-auto">
                        <select ref={ManagerRef} defaultValue={props.diaries.manager} className="form-control form-select-lg" id="manager" name="manager">
                            {managerOptions.map((d, i) => <option key={i} value={d.value}>{d.label}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="sleep_time">睡眠時間(h)</label>
                <div className="row">
                    <div className="col-auto">
                        <input type="number" defaultValue={props.diaries.sleep_time}
                            ref={SleeptimeRef}
                            className="form-control" id="sleep_time" name="sleep_time" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="start">出社時間</label>
                <div className="row">
                    <div className="col-auto">
                        <input type="time" defaultValue={props.diaries.start}
                        ref={StartRef}
                            className="form-control" id="start" name="start" />
                    </div>
                    <div className="col-auto">
                        ～
                    </div>
                    <div className="col-auto">
                        <input type="time" defaultValue={props.diaries.end}
                            ref={EndRef}
                            className="form-control" id="end" name="end" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="comment">コメント</label>
                <textarea ref={CommentRef} defaultValue={props.diaries.comment} className="form-control" id="comment" name="comment" ></textarea>
            </div>
            <div className="row">
                <div className="col-auto">
                    <button type="button" onClick={handleAddDiary} className="btn btn-primary">登録する</button>
                </div>
                <div className="col-auto">
                    <button type="button" onClick={props.onStop} className="btn  btn-outline-secondary">削除する</button>
                </div>
            </div>


        </div>
    )
}

export default Form