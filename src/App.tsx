import React, {useState} from 'react';
import s from './App.module.css';

function App() {
    const [value, setValue] = useState<number>(0)
    const onClickIncrement = () => {
        setValue(value + 1)
    }
    const onClickReset = () => {
        setValue(0)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.settings}>
                <div className={s.valuesWrapper}>
                    <label htmlFor="">
                        max value:
                        <input type="text"/>
                    </label>
                    <label htmlFor="">
                        start value:
                        <input type="text"/>
                    </label>
                </div>
                <div>
                    <button>set</button>
                </div>
            </div>
            <div className={s.counter}>
                <div className={s.value}>
                    {value}
                </div>
                <div className={s.btnWrapper}>
                    <button onClick={onClickIncrement}>inc</button>
                    <button onClick={onClickReset}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
