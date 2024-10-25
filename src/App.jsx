import { useEffect, useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import { addLS, getStoreCart } from "../public/localstroge";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmark = (blog) => {
    const newBookmark = [...new Set(bookmarks), blog];
    setBookmarks(newBookmark);
    addLS(blog.id);
  };
  const handleRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remaingBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaingBookmark);
  };

  useEffect(() => {
    if (blogs.length > 0) {
      const storeCart = getStoreCart();
      console.log(storeCart);
    }
  }, [blogs]);
  return (
    <>
      <div className="container mx-auto lg:px-10">
        <Header></Header>
        <main>
          <div className="xl:grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <Blogs
                handleBookmark={handleBookmark}
                handleRead={handleRead}
                blogs={blogs}
              ></Blogs>
            </div>
            <div className="col-span-1">
              <Bookmarks
                bookmarks={bookmarks}
                readingTime={readingTime}
              ></Bookmarks>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
