import React from 'react';
import { Diary } from './Diary';
import View from './components/View';
import Form from './components/Form';
import { useState, useEffect } from 'react';

function App() {

  const [isEdit, setIsEdit] = useState(false);
  const [diaries, setDiaries] = useState<Diary>({
    id: 0,
    weather: "",
    manager: "",
    sleep_time: 0,
    start: "",
    end: "",
    comment: ""
  });

  const editHandler = () => {
    setIsEdit(true);
  }
  const viewHandler = () => {
    setIsEdit(false);
  }

  useEffect(() => {
    fetch("http://localhost:3004/diaries/1")
      .then(res => res.json())
      .then(data => setDiaries(data));
  }, []);

  return (
    <div className="App">
      <h2>2022年09月22日の日記</h2>
      {isEdit ?
        <div>
          <div><button onClick={viewHandler} className='btn btn-primary mb-2'>戻る</button></div>
          <Form diaries={diaries} setDiaries={setDiaries} onStop={viewHandler} />

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
