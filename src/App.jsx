import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);
  const handleBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };
  const handleRead = (id, time) => {
    setreadingTime(readingTime + time);
    const remaingBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    console.log(remaingBookmark, id);
    setBookmarks(remaingBookmark);
  };
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
