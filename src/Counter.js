import React, {useState} from 'react'
import Styles from './Counter.module.css';

const Counter = () => {
    let [count, setCount] = useState(0);

    const increaseCounter = () => {
        setCount((prevState) => ++prevState);
        
    }
    const decreaseCounter = () => {
        if (count === 0) return;
        setCount((prevState) => --prevState);

        // return count !== 0 ? setCount((prevState) => --prevState) : 0;
    }

    return (
    <div className={Styles.counter}>
        <button onClick={decreaseCounter}>-</button>
        <span>{count}</span>
        <button onClick={increaseCounter}>+</button>
    </div>
  )
}

export default Counter