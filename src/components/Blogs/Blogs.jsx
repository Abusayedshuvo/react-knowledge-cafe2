import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmark={handleBookmark}
          handleRead={handleRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  handleRead: PropTypes.func,
};

export default Blogs;
