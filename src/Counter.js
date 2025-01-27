import useCounter from "./useCounter";

const Counter = () => {
    const [ count, increment, decrement, reset ] = useCounter(0);
    
    return (
        <div className="count">
            <h2>Count: {count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
 
export default Counter;
