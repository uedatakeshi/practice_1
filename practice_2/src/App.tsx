import React from 'react';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [sleepTime, setSleepStime] = useState(9);

  const sleepHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
    setSleepStime(Number(e.currentTarget.value));
  }
  const submitHandler = (e: React.MouseEventHandler<HTMLButtonElement>): void => {
    console.log(e.currentTarget.value);
    setSleepStime(Number(e.currentTarget.value));
  }

  return (
    <div className="App">
      {sleepTime}
      <Input sleepTime={sleepTime} sleepHandler={sleepHandler} />
      <button onClick={submitHandler}>クリック</button>
    </div>
  );
}

export default App;
