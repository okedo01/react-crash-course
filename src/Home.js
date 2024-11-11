import { useState } from "react";

const Home = () => {
    // let name = "Mario";
    // let age = 23;
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(23);

    const handleClick = () => {
        setName('Luigi');
        setAge(24)
    }

    return ( 
        <div className="home">
            <h1>Home page</h1>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;