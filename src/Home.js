import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum....", author: "Mario", id: 1},
        {title: "Welcome party!", body: "lorem ipsum....", author: "Yoshi", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum....", author: "Mario", id: 3}
    ])

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog  => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect run");
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs" handleDelete = { handleDelete }/> 
            <p>{ name }</p><br />
            <button onClick={() => setName('Yoshi')}>change name</button>
        </div>
     );
}
 
export default Home;