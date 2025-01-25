// import { useState } from "react";

// const BlogList = ({blogs, title}) => {
   
//     return ( 
//         <div className="blog-list">
//             <h1>{ title }</h1>
//             { blogs.map(blog => (
//                 <div className="blog-preview" key={blog.id}>
//                      <h2>{ blog.title }</h2>
//                      <p>Written By: { blog.author }</p><br />
//                 </div>
//             ))}
//         </div>
//      );
// }
 
// export default BlogList;

const BlogList = ({blogs, title, handleDelete}) => {
// const blogs = props.blogs;
// const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <div>Written by: {blog.author}</div>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;