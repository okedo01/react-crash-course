import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // return ( 
    //     <div className="home">
    //         { error && <div> { error } </div> }
    //         { isPending && <div> Loading...</div> }
    //         { blogs && <BlogList blogs = {blogs} title = "All Blogs" /> } 
    //     </div>
    //  );

    const [ name, setName ] = useState('okedo');
    const [ age, setAge ] = useState(25);
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState('');

    const handleClick = () => {
        setName('marvel');
        setAge(30);
        console.log(name);
        console.log(age);
    }

    const increment = () => {
        setCount(count + 1);
        console.log(count);   
    }

    const inputText = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="contaimer">
                <div className="naming">
                <p>My name is { name } and I am { age } years old</p>
                <button onClick={ handleClick }>Click me</button>
            </div>
            <br />

            <div className="counting">
            <p>{ count }</p>
            <button onClick={ increment }>Count</button>
            </div>
            <br />

            <div className="inputField">
                <input type="text"  value={text} onChange={inputText}/>
                <p>input text: { text }</p>
            </div>
        </div>
    );
}
 
export default Home;