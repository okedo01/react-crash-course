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

    const handleClick = () => {
        setName('marvel');
        setAge(30);
        console.log(name);
        console.log(age);
    }

    return (
        <div className="contaimer">
            <p>My name is { name } and I am { age } years old</p>
            <button onClick={ handleClick }>Click me</button>
        </div>
    );
}
 
export default Home;