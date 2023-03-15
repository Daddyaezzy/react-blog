import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const [blogList, setBlogList] = useState(blogs);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBlogList(blogList.filter((blog) => blog.id !== id));
      navigate("/");
    });
  };
  return (
    <div>
      <h1>{title}</h1>
      {blogList.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <div className="blog-preview-delete">
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
