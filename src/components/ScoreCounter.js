import React, { useState } from 'react';

function useCounter(initialCounterValue) {
    const [counter, setCounter] = useState(initialCounterValue);

    const handlers = {
        increment: () => setCounter(counter + 1),
        decrement: () => setCounter(counter - 1)
    }

    return [counter, handlers];
}

const ScoreCounter = ({ style = {} }) => {
    const [counter, { increment, decrement }] = useCounter(0);
    return (
        <div style={style}>
            <button onClick={() => increment()}>+</button>
            <span>{
                counter
            }</span>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}

export default ScoreCounter;