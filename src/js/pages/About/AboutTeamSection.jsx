import { Link } from "react-router-dom";
import { TeamMembers } from "../../data/TeamMembers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutTeamSection() {
  return (
    <section className="aboutpage__team">
      <div className="aboutpage__team--title">
        <h2>Our team members</h2>
        <p>
          These are the people who work every day to create great products that
          will help you in your work.
        </p>
      </div>
      <div className="aboutpage__team--members">
        {TeamMembers.map((member) => (
          <div key={member.id}>
            <img src={member.img} />
            <p>
              <span>{member.name}</span>
            </p>
            <p>{member.title}</p>
            <ul>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faDribbble} />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="aboutpage__team--join">
        <Link to="/careers">
          We think you&apos;ll fit in here. Submit your resume
        </Link>
      </div>
    </section>
  );
}

export default AboutTeamSection;
