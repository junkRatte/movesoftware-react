import ReactPlayer from "react-player";
import officeVideo from "../../../assets/office.mp4";

function VideoSection() {
  return (
    <section className="homepage__video">
      <div className="homepage__video--title">
        <h2>Build from the ground up</h2>
        <p>
          Create your projects from scratch with the powerful Move Toolkit. We
          will tell you more about it in our video.
        </p>
      </div>
      <ReactPlayer className="custom-player" url={officeVideo} controls />
    </section>
  );
}

export default VideoSection;
