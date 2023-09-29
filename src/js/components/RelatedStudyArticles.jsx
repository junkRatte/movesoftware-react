import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function RelatedStudyArticles({ currentArticle, previousArticles }) {
  if (!currentArticle) {
    return null;
  }

  return (
    <div className="related__studies">
      <h2>You may be interested in these articles</h2>
      <div className="cards">
        {previousArticles.map((study) => (
          <div key={study.id} className="cards-wrapper">
            <div className="thumbnail">
              <img src={study.image} id="thumbnail-img" />
              <img src={study.logo} id="logo" />
            </div>
            <div className="text">
              <h3>{study.companyName}</h3>
              <p>{study.thumbnailText}</p>
              <Link to={`/studies/${encodeURIComponent(study.companyName)}`}>
                Read story <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RelatedStudyArticles;
