import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = (e) => {
        const { name } = e.target;
        setCount((prev) => name == 'plus' ? prev + 1 : prev - 1)
    }
    return (
        <>
            <h2>Counter</h2>
            <div className={'counterWrapper'}>
                <button className={'counterButton'} name={'minus'} onClick={handleClick}>{'-'}</button>
                <p>{count}</p>
                <button className={'counterButton'} name={'plus'} onClick={handleClick}>{'+'}</button>
            </div>
        </>
    );
}