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

    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: "Marvel", id: 1}, 
        {title: "Welcome party", body: "lorem ipsum...", author: "Stallion", id: 2},
        {title: "Web devs top tips", body: "lorem ipsum...", author: "Okedo", id: 3}
    ])

    useEffect(() => {
        console.log("use effect rendered");
        console.log(blogs);
    });
    const handleDelete = (id) => {
        console.log(`blog ${id} is deleted`);
        setBlogs(blogs.filter((blog) => blog.id !== id));
    }

    return (
        <div className="contaimer">
           <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} /> 
        </div>
    );
}
 
export default Home;