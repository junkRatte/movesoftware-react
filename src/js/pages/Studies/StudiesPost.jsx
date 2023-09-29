import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchStudyDataWithImages } from "../../api/FirestoreApi";
import Loader from "../../components/Loader";
import RelatedStudyArticles from "../../components/RelatedStudyArticles";

function StudiesPost() {
  const { title } = useParams();
  const [studyData, setStudyData] = useState(null);
  const [studiesData, setStudiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudyData = async () => {
      try {
        const fetchedStudiesData = await fetchStudyDataWithImages();
        const study = fetchedStudiesData.find(
          (study) => study.companyName === decodeURIComponent(title)
        );

        setStudyData(study);
        setStudiesData(fetchedStudiesData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStudyData();
  }, [title]);

  const truncateTextAfterSentences = (text, sentencesToKeep) => {
    const sentences = text.split(". ");
    const truncatedSentences = sentences.slice(0, sentencesToKeep);
    return truncatedSentences.join(". ");
  };

  const currentIndex = studiesData.findIndex(
    (study) => study.companyName === decodeURIComponent(title)
  );

  const previousArticles =
    currentIndex !== -1
      ? studiesData.slice(
          Math.max(0, currentIndex - 3),
          Math.max(0, currentIndex)
        )
      : [];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="studies__post">
          <div className="content-container">
            <div className="studies__post--title">
              <img src={studyData.logo} alt="Logo" />
              <h2>{studyData.slogan}</h2>
              <p>{studyData.thumbnailText}</p>
              <img src={studyData.image[0]} alt="Thumbnail" id="thumbnail" />
            </div>
            <div className="studies__post--wrapper">
              <div className="company-info">
                <ul>
                  <li>
                    <span>Company</span>
                    {studyData.companyName}
                  </li>
                  <li>
                    <span>Industry</span>
                    {studyData.industry}
                  </li>
                  <li>
                    <span>Location</span>
                    {studyData.location}
                  </li>
                  <li>
                    <span>Size</span>
                    {studyData.size}
                  </li>
                  <li>
                    <strong>Website</strong>
                    <a href={studyData.website}>{studyData.website}</a>
                  </li>
                </ul>
              </div>
              <div className="company-desc">
                <h3>{studyData.slogan}</h3>
                <p>
                  {studyData.description.slice(
                    truncateTextAfterSentences(studyData.description, 0)
                      .length + 0
                  )}
                </p>
                <p>
                  {studyData.description.slice(
                    truncateTextAfterSentences(studyData.description, 1)
                      .length + 1
                  )}
                </p>
                <h4>Platforms</h4>
                <p>{studyData.platforms}</p>
                <img src={studyData.image[1]} alt="Thumbnail" id="thumbnail" />
                <h4>Business model</h4>
                <p>{studyData.businessModel}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      {!isLoading && studyData && (
        <section className="related-articles-container">
          <RelatedStudyArticles
            currentArticle={studyData}
            previousArticles={previousArticles}
          />
        </section>
      )}
    </div>
  );
}

export default StudiesPost;
