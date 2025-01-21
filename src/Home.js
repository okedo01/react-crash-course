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

    return (
        <div className="contaimer">
                <div className="naming">
                <p>My name is { name } and I am { age } years old</p>
                <button onClick={ handleClick }>Click me</button>

                <p>{ count }</p>
                <button oncClick={ increment }>Count</button>
            </div>
{/* 
            <div className="counting">
            <p>{ count }</p>
            <button oncClick={ increment }>Count</button>
            </div> */}
        </div>
    );
}
 
export default Home;