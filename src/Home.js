import { useState } from "react";
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
        {title: "Web devs top tips", body: "lorem ipsum...", author: "Okedo", id: 3},  
        {title: "Welcome party", body: "lorem ipsum...", author: "Stallion", id: 2},
        {title: "Web devs top tips", body: "lorem ipsum...", author: "Okedo", id: 3}
    ])

    return (
        <div className="contaimer">
           <BlogList blogs={blogs} title="All blogs"/> 
           <BlogList blogs={blogs.filter((blog) => blog.author === "Okedo")} title="Okedo's blogs"/> 
        </div>
    );
}
 
export default Home;