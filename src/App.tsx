import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css';

function App() {
    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const onClickIncrement = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const onClickReset = () => {
        setValue(startValue)
    }

    const onChangeSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeSetStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }

    const onClickSetStartValue = () => {
        setValue(startValue)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.settings}>
                <div className={s.valuesWrapper}>
                    <label htmlFor="">
                        max value:
                        <input type="number" value={maxValue} onChange={onChangeSetMaxValue}/>
                    </label>
                    <label htmlFor="">
                        start value:
                        <input type="number" value={startValue} onChange={onChangeSetStartValue}/>
                    </label>
                </div>
                <div>
                    <button onClick={onClickSetStartValue}>set</button>
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
