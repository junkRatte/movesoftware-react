import { useState } from "react";
import { addJob } from "../api/FirestoreApi";

function AdminJobForm() {
  const initialFormData = {
    jobTitle: "",
    jobCategory: "",
    location: "",
    description: "",
    requirements: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const postJobData = async (e) => {
    e.preventDefault();

    const jobData = { ...formData };

    if (
      jobData.jobTitle.trim() === "" ||
      jobData.jobCategory.trim() === "" ||
      jobData.location.trim() === "" ||
      jobData.description.trim() === "" ||
      jobData.location.trim() === ""
    ) {
      setErrorMessage(true);
      return;
    }

    addJob(jobData)
      .then((success) => {
        if (success) {
          setFormData(initialFormData);
          setIsPostSuccessful(true);
        } else
          (err) => {
            console.log(err);
            setIsPostSuccessful(false);
          };
      })
      .catch((err) => {
        console.log("error adding post", err);
      });
  };

  return (
    <form onSubmit={postJobData} className="admin__dashboard--jobForm">
      {(isPostSuccessful && (
        <h1 style={{ color: "green" }}>Job posted successfully</h1>
      )) ||
        (errorMessage && <h1 style={{ color: "red" }}>Job post failed</h1>)}
      <label>Job title</label>
      <input
        name="jobTitle"
        type="text"
        value={formData.jobTitle}
        onChange={handleChange}
      />

      <label>Job category</label>
      <input
        name="jobCategory"
        type="text"
        value={formData.jobCategory}
        onChange={handleChange}
      />

      <label>Location</label>
      <input
        name="location"
        type="text"
        value={formData.location}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Requirements</label>
      <textarea
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AdminJobForm;
