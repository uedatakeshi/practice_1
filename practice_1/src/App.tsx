import React from 'react';
import { Diary } from './Diary';
import View from './components/View';
import Form from './components/Form';
import { useState } from 'react';

  function App() {

  const [isEdit, setIsEdit] = useState(false);
  const [diaries, setDiaries] = useState<Diary>({
    weather:"晴れ",
    manager:"山田",
    sleep_time:9,
    start:"10:00",
    end:"17:00",
    comment:"はじめまして。"
  });

  const editHandler = () => {
    setIsEdit(true);
  }
  const viewHandler = () => {
    setIsEdit(false);
  }


  return (
    <div className="App">
      <h2>2022年09月22日の日記</h2>
      {isEdit ?
        <div>
          <div><button onClick={viewHandler} className='btn btn-primary mb-2'>戻る</button></div>
          <Form diaries={diaries} setDiaries={setDiaries}  onStop={viewHandler} />

        </div>

        :

        <div>
          <div><button onClick={editHandler} className='btn btn-success mb-2'>編集する</button></div>
          <View diaries={diaries} />
        </div>
      }


    </div>
  );
}

export default App;
