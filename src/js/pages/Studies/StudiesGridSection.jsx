import { useState, useEffect } from "react";
import { fetchStudyDataWithImages } from "../../api/FirestoreApi";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StudiesGridSection() {
  const [studyData, setStudyData] = useState([]);

  useEffect(() => {
    const fetchStudyData = async () => {
      const studyData = await fetchStudyDataWithImages();
      setStudyData(studyData);
    };
    fetchStudyData();
  }, []);

  return (
    <section className="studiespage__grid">
      <div className="studiespage__grid--row-1">
        <div className="content-container">
          {studyData.slice(0, 2).map((study) => (
            <div className="card-wrapper-1" key={study.id}>
              <img src={study.image} id="thumbnail-img-1" />
              <div>
                <img src={study.logo} />
                <h5>{study.companyName}</h5>
                <p>{study.thumbnailText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="studiespage__grid--row-2">
        <div className="content-container">
          {studyData.slice(2, 8).map((study) => (
            <div className="card-wrapper-2" key={study.id}>
              <div className="thumbnail">
                <img src={study.image} id="thumbnail-img-2" />
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
      <div className="studiespage__grid--row-1">
        <div className="content-container">
          {studyData.slice(8, 10).map((study) => (
            <div className="card-wrapper-1" key={study.id}>
              <img src={study.image} id="thumbnail-img-1" />
              <div>
                <img src={study.logo} />
                <h5>{study.companyName}</h5>
                <p>{study.thumbnailText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudiesGridSection;
