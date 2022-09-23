import React from 'react';
import View from './components/View';
import Form from './components/Form';
import { useState, useRef } from 'react';

function App(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [diaries, setDiaries] = useState({
    weather:"", 
    manager:"", 
    sleep_time:"", 
    start:"", 
    end:"", 
    comment:""
  });
  //const diaryWeatherRef = useRef();
  //const diaryManagerRef = useRef();

  const editHandler = () => {
    setIsEdit(true);
  }
  const viewHandler = () => {
    setIsEdit(false);
  }
  const handleAddDiary = () => {
    //const weather = diaryWeatherRef.current.value;
    //const manager = diaryManagerRef.current.value;
  }



  return (
    <div className="App">
      <h2>2022年09月22日の日記</h2>
      {isEdit ?
        <div>
          <div><button onClick={viewHandler} className='btn btn-primary mb-2'>戻る</button></div>
          <Form onStop={viewHandler} />

        </div>

        :

        <div>
          <div><button onClick={editHandler} className='btn btn-success mb-2'>編集する</button></div>
          <View />
        </div>
      }


    </div>
  );
}

export default App;
