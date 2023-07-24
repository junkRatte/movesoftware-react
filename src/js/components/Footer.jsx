import { Link } from "react-router-dom";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <h4>Move</h4>
          <p>
            Move - Multipurpose Design Template will help you develop your
            website design.
          </p>
          <ul>
            <li>
              <Link>
                <FontAwesomeIcon icon={faBasketball} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Home</h5>
          <ul>
            <li>
              <Link>Desktop App</Link>
            </li>
            <li>
              <Link>Mobile App</Link>
            </li>
            <li>
              <Link>SaaS</Link>
            </li>
            <li>
              <Link>Events</Link>
            </li>
            <li>
              <Link>Software</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Pages</h5>
          <ul>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Case Studies</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Blog</h5>
          <ul>
            <li>
              <Link>Blog Listing</Link>
            </li>
            <li>
              <Link>Blog Article</Link>
            </li>
            <li>
              <Link>Newsroom</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Portfolio</h5>
          <ul>
            <li>
              <Link>Portfolio</Link>
            </li>
            <li>
              <Link>Single Case</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/file/Ss49eiQYDsPztKXbmpdEXp/Move-Design-Template-%2B-UI-Kit-(Community)?type=design&node-id=0-2076&mode=design&t=kBjiaZodAXB2yTrO-0"
        >
          © Link to the Figma design
        </a>
      </div>
    </footer>
  );
}

export default Footer;
