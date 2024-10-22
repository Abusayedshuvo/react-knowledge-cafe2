import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <>
      <div className="bg-[#6047ec55] text-center border border-[#6047ec] p-5">
        <p className="text-[#6047EC] text-2xl font-bold">
          Spent time on read : {readingTime} min
        </p>
      </div>
      <div className="bg-[#1111110d] p-8 rounded-md">
        <p className="text-2xl font-bold mb-5">
          Bookmarked Blogs : {bookmarks.length}
        </p>
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="bg-white p-5 rounded-md mb-5">
            <p>{bookmark.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
