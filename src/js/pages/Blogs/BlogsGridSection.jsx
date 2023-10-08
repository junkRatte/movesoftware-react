import { useEffect, useState } from "react";
import { fetchBlogDataWithImages } from "../../api/FirestoreApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function BlogsGridSection() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      const blogData = await fetchBlogDataWithImages();
      const formattedBlogData = blogData.map((blog) => ({
        ...blog,
        createdAt: format(new Date(blog.createdAt), "do MMMM"),
      }));
      setBlogData(formattedBlogData);
    };
    fetchBlogData();
  }, []);

  return (
    <div className="blogspage__grid">
      <div className="content-container">
        <div className="blogspage__grid--row">
          {blogData.map((blog) => (
            <div className="card__wrapper" key={blog.id}>
              <img src={blog.thumbnailImage} id="thumbnailImage" />
              <div className="card__wrapper--text">
                <div>
                  <span>{blog.industry}</span>
                  <p>{blog.createdAt}</p>
                  <span>
                    <FontAwesomeIcon icon={faHeart} />
                    {blog.likes}
                  </span>
                </div>
                <h4>{blog.blogName}</h4>
                <p>{blog.thumbnailText}</p>
                <Link to={`/blogs/${encodeURIComponent(blog.blogName)}`}>
                  Read story <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsGridSection;
