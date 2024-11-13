import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        
        setTimeout(() => {
            fetch('http://localhost:7000/blogs')
            .then(response => {
                if(!response.ok) {
                    throw Error("404 Not Found");
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setIsPending(false);
            })
        }, 1000)
        
    }, []);

    return ( 
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div> Loading...</div> }
            { blogs && <BlogList blogs = {blogs} title = "All Blogs" /> } 
        </div>
     );
}
 
export default Home;