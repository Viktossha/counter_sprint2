import React, {useState} from 'react';
import s from './App.module.css';

function App() {
    const [value, setValue] = useState<number>(0)
    const onClickIncrement = () => {setValue(value + 1)}
    const onClickReset = () => {setValue(0)}

  return (
    <div className={s.counter}>
      <div className={s.value}>
          {value}
      </div>
      <div className={s.btnWrapper}>
        <button onClick={onClickIncrement}>inc</button>
        <button onClick={onClickReset}>reset</button>
      </div>
    </div>
  );
}

export default App;
