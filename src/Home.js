import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, []);

    return (
        <div className="container">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
           { blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
    );
}
 
export default Home;