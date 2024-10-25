import PropTypes from "prop-types";
import { BiBookmark } from "react-icons/bi";

const Blog = ({ blog, handleBookmark, handleRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10 border p-5 rounded-md">
      <img className="rounded-lg w-full" src={cover} alt="" />
      <div className="mt-10 flex justify-between">
        <div className="flex items-center gap-5">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <p className="text-2xl font-bold">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmark(blog)}>
            <BiBookmark></BiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold my-4">{title}</h2>
      {hashtags.map((has, index) => (
        <a className="px-2" key={index} href="#">
          # {has}
        </a>
      ))}

      <div className="mt-5">
        <button
          onClick={() => handleRead(id, reading_time)}
          className="text-[#6047EC] tex-lg font-semibold"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleRead: PropTypes.func,
};

export default Blog;
