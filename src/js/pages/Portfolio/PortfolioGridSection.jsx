import { useEffect, useState } from "react";
import { fetchPortfolioDataWithImages } from "../../api/FirestoreApi";
import { Link } from "react-router-dom";

function PortfolioGridSection() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = [
    { id: "Mobile App", label: "Mobile App" },
    { id: "Website", label: "Website" },
    { id: "Desktop App", label: "Desktop App" },
    { id: "UI/UX", label: "UI/UX" },
  ];

  useEffect(() => {
    const fetchPortfolioData = async () => {
      const portfolioData = await fetchPortfolioDataWithImages();
      setPortfolioData(portfolioData);
    };
    fetchPortfolioData();
  }, []);

  const handleFitlerClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="portfoliopage__grid">
      <div className="content-container">
        <div className="portfoliopage__grid--filters">
          <ul>
            <li
              className={activeFilter === "all" ? "active-filter" : ""}
              onClick={() => handleFitlerClick("all")}
            >
              All
            </li>
            {filters.map((filter) => (
              <li
                key={filter.id}
                className={activeFilter === filter.id ? "active-filter" : ""}
                onClick={() => handleFitlerClick(filter.id)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="portfoliopage__grid--cards">
          {portfolioData
            .filter((portfolio) => {
              if (activeFilter === "all") {
                return true;
              } else {
                return portfolio.category === activeFilter;
              }
            })
            .map((portfolio) => (
              <div className="portfolio-card" key={portfolio.id}>
                <Link
                  to={`/portfolio/project/${encodeURIComponent(
                    portfolio.projectName
                  )}`}
                >
                  <img src={portfolio.thumbnailImage} />
                </Link>
                <Link
                  to={`/portfolio/project/${encodeURIComponent(
                    portfolio.projectName
                  )}`}
                >
                  <h3>{portfolio.projectName}</h3>
                </Link>
                <p>{portfolio.category}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGridSection;
