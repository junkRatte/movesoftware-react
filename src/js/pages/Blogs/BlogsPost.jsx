import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogDataWithImages } from "../../api/FirestoreApi";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

function BlogsPost() {
  const { title } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [blogsData, setBlogsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const fetchedBlogsData = await fetchBlogDataWithImages();
        const blog = fetchedBlogsData.find(
          (blog) => blog.blogName === decodeURIComponent(title)
        );
        const formattedCreatedAt = format(new Date(blog.createdAt), "do MMMM");

        setBlogData({ ...blog, createdAt: formattedCreatedAt });
        setBlogsData(fetchedBlogsData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlogData();
  }, [title]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="blogs__post">
          <div className="content-container">
            <div className="blogs__post--wrapper">
              <div className="blogs__post--wrapper-text">
                <div>
                  <span>
                    <p>Blog</p>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <p>{blogData.industry}</p>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faHeart} />
                    <p>{blogData.likes}</p>
                  </span>
                </div>
                <h2>{blogData.blogName}</h2>
                <div>
                  <h5>
                    {blogData.authorName} {blogData.authorLastName}
                  </h5>
                  <p>{blogData.createdAt}</p>
                </div>
              </div>
              <img
                src={blogData.thumbnailImage}
                alt="Blog"
                className="blogs__post--wrapper-image"
              />
            </div>
            <div className="content-container">
              <div className="blogs__post--description">
                <p>{blogData.description}</p>
                <img src={blogData.thumbnailImage} />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogsPost;
