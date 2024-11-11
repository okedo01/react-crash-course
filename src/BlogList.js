const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    
    return ( 
        <div className="blog-list">
            <h1>All Blogs</h1>
            { blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                     <h2>{ blog.title }</h2>
                     <p>Written By: { blog.author }</p><br />
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;