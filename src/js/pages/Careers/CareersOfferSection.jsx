import PackageImg from "../../../assets/package.png";
import NotepadImg from "../../../assets/notepad.png";
import MugImg from "../../../assets/mug.png";
import GamepadImg from "../../../assets/gamepad.png";

function CareersOfferSection() {
  return (
    <section className="careerspage__offers">
      <div className="content-container">
        <div className="careerspage__offers--title">
          <h2>What we offer</h2>
          <p>
            We offer you a huge number of advantages when applying for a job
            with us. Check out a few basic but important ones below.
          </p>
        </div>
        <div className="careerspage__offers--cards">
          <div className="offer-card">
            <img src={PackageImg} />
            <h3>Full social package</h3>
            <p>
              Our company offers you a full social package when you apply for a
              job with us.
            </p>
          </div>
          <div className="offer-card">
            <img src={NotepadImg} />
            <h3>The arrangement of the workplace</h3>
            <p>
              We will equip your workplace at the expense of the company. You
              can order everything you need for your work.
            </p>
          </div>
          <div className="offer-card">
            <img src={MugImg} />
            <h3>Free meals</h3>
            <p>
              During breaks between work, you can eat in our cafe for free. You
              will have a huge selection of food available.
            </p>
          </div>
          <div className="offer-card">
            <img src={GamepadImg} />
            <h3>Game room</h3>
            <p>
              If you are too tired you can distract yourself from thinking about
              working in the game room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersOfferSection;
