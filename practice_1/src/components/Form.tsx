import React from 'react'

const Form = (props: any) => {
      
  return (
    <div>
        <div className="mb-3">
            <label className="form-label" htmlFor='weather'>天気</label>
            <div className="row">
                <div className="col-auto">
                    <select className="form-control form-select-lg" id="weather" name="weather" >
                        <option>晴れ</option>
                        <option>曇り</option>
                        <option>雨</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="manager">担当者</label>
            <div className="row">
                <div className="col-auto">
                    <select className="form-control form-select-lg" id="manager" name="manager">
                        <option>山田</option>
                        <option>前田</option>
                        <option>高田</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="sleep_time">睡眠時間(h)</label>
            <div className="row">
                <div className="col-auto">
                    <input type="number" className="form-control" id="sleep_time" name="sleep_time"/>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="start">出社時間</label>
            <div className="row">
                <div className="col-auto">
                    <input type="time" className="form-control" id="start" name="start"/>
                </div>
                <div className="col-auto">
                    ～
                </div>
                <div className="col-auto">
                    <input type="time" className="form-control" id="end" name="end"/>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="comment">コメント</label>
            <textarea className="form-control" id="comment" name="comment"></textarea>
        </div>
        <div className="row">
            <div className="col-auto">
              <button type="button" onClick={props.handleAddDiary} className="btn btn-primary">登録する</button>
            </div>
            <div className="col-auto">
              <button type="button" onClick={props.onStop} className="btn  btn-outline-secondary">削除する</button>
            </div>
          </div>


    </div>
  )
}

export default Form