import PropTypes from "prop-types";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleRead, blogs }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
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
  blogs: PropTypes.array,
};

export default Blogs;
