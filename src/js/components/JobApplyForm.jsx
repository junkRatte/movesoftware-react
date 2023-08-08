import { useState } from "react";
import { useRef } from "react";

function JobApplyForm() {
  const fileInputRef = useRef(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();

    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setIsFileUploaded(true);
    setSelectedFileName(selectedFile.name);
  };

  const handleEnableButton = () => {
    setIsButtonEnabled(!isButtonEnabled);
  };

  return (
    <div className="job-form">
      <h2>Ready to apply?</h2>
      <form>
        <div className="job-form-wrapper">
          <div className="user-input">
            <div className="user-input-info">
              <label>Full Name</label>
              <input type="text" placeholder="John Smith" />
            </div>
            <div className="user-input-info">
              <label>Email Adress</label>
              <input type="email" placeholder="your@domain.com" />
            </div>
          </div>
          <div className="custom-input">
            <div>
              <label>Attach Resume</label>
              <input
                type="text"
                placeholder={isFileUploaded ? selectedFileName : "Choose file"}
                onClick={handleButtonClick}
              />
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} />
            <button className="primary-btn" onClick={handleButtonClick}>
              Browse
            </button>
          </div>
          <div className="user-input-info">
            <label>Why do you want to work here?</label>
            <textarea rows="20" placeholder="Type here">
              Type here
            </textarea>
          </div>
          <div className="input-terms">
            <div>
              <input type="checkbox" onClick={handleEnableButton} />
              <span>I agree to the Terms & Conditions</span>
            </div>
            <input
              type="submit"
              value="Submit application"
              disabled={!isButtonEnabled}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default JobApplyForm;
