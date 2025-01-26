import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     fetch("http://localhost:8000/blogs")
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //         })
    // }, []);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="container">
           {/* { blogs && <BlogList blogs={blogs} title="All blogs" /> } */}
           <div className="count">
            <button onClick={() => setCount(count + 1)}>count</button>
            <p>counts: {count} </p>
           </div>
        </div>
    );
}
 
export default Home;