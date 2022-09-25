import React from 'react';
import View from './components/View';
import Form from './components/Form';
import { useState, useRef } from 'react';

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [diaries, setDiaries] = useState({
    weather:"", 
    manager:"", 
    sleep_time:"8", 
    start:"", 
    end:"", 
    comment:"はじめまして。"
  });

  const editHandler = () => {
    setIsEdit(true);
  }
  const viewHandler = () => {
    setIsEdit(false);
  }
  const handleAddDiary = () => {
    //console.log(diaryWeatherRef.current.value);
    //const weather = diaryWeatherRef.current.value;
    //const manager = diaryManagerRef.current.value;
  }



  return (
    <div className="App">
      <h2>2022年09月22日の日記</h2>
      {isEdit ?
        <div>
          <div><button onClick={viewHandler} className='btn btn-primary mb-2'>戻る</button></div>
          <Form diaries={diaries} setDiaries={setDiaries}  onStop={viewHandler} onAdd={handleAddDiary} />

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
