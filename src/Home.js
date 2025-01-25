import { useEffect, useState } from "react";
import BlogList from "./BlogList";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

const Home = () => {
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // return ( 
    //     <div className="home">
    //         { error && <div> { error } </div> }
    //         { isPending && <div> Loading...</div> }
    //         { blogs && <BlogList blogs = {blogs} title = "All Blogs" /> } 
    //     </div>
    //  );

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, []);

    return (
        <div className="container">
           { blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
    );
}
 
export default Home;