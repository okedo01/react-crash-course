import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Create from "./Create";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return (
        <div className="container">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
           { blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
    );
}
 
export default Home;