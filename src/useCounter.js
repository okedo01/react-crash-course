import { useState } from "react";

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    const reset = () => {
            setCount(initialCount);
    }
    return {count, increment, decrement, reset};
}
export default useCounter;