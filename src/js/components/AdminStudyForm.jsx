import { useState } from "react";
import { addStudy } from "../api/FirestoreApi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";

function AdminStudyForm() {
  const initialFormData = {
    companyName: "",
    industry: "",
    location: "",
    size: "",
    website: "",
    slogan: "",
    description: "",
    platforms: "",
    businessModel: "",
    thumbnailText: "",
    image: [],
    logo: [],
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const fileInputs = document.querySelectorAll('input[type="file"]');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const selectedImages = Array.from(e.target.files);

    const uploadedImageUrls = await Promise.all(
      selectedImages.map(async (image) => {
        const storageRefImg = ref(storage, `studyImages/${image.name}`);
        await uploadBytes(storageRefImg, image);
        return getDownloadURL(storageRefImg);
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      image: uploadedImageUrls,
    }));
  };

  const handleLogoChange = async (e) => {
    const selectedLogos = Array.from(e.target.files);

    const uploadedLogoUrls = await Promise.all(
      selectedLogos.map(async (logo) => {
        const storageRefLogo = ref(storage, `companyLogo/${logo.name}`);
        await uploadBytes(storageRefLogo, logo);
        return getDownloadURL(storageRefLogo);
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      logo: uploadedLogoUrls,
    }));
  };

  const postStudyData = async (e) => {
    e.preventDefault();

    const studyData = { ...formData };

    if (
      studyData.companyName.trim() === "" ||
      studyData.industry.trim() === "" ||
      studyData.location.trim() === "" ||
      studyData.size.trim() === "" ||
      studyData.website.trim() === "" ||
      studyData.slogan.trim() === "" ||
      studyData.description.trim() === "" ||
      studyData.platforms.trim() === "" ||
      studyData.businessModel.trim() === "" ||
      studyData.thumbnailText.trim() === "" ||
      studyData.image.length === 0 ||
      studyData.logo.length === 0
    ) {
      setErrorMessage(true);
      return;
    }

    addStudy(studyData)
      .then((success) => {
        if (success) {
          setFormData(initialFormData);
          setIsPostSuccessful(true);
          fileInputs.forEach((input) => {
            input.value = "";
          });
        } else
          (err) => {
            console.log(err);
            setIsPostSuccessful(false);
          };
      })
      .catch((err) => {
        console.log("error adding study", err);
      });
  };

  return (
    <form onSubmit={postStudyData} className="admin__dashboard--jobForm">
      {(isPostSuccessful && (
        <h1 style={{ color: "green" }}>Study posted successfully</h1>
      )) ||
        (errorMessage && <h1 style={{ color: "red" }}>Study post failed</h1>)}
      <label>Company name</label>
      <input
        name="companyName"
        type="text"
        value={formData.companyName}
        onChange={handleChange}
      />

      <label>Industry</label>
      <input
        name="industry"
        type="text"
        value={formData.industry}
        onChange={handleChange}
      />

      <label>Location</label>
      <input
        name="location"
        type="text"
        value={formData.location}
        onChange={handleChange}
      />

      <label>Thumbnail text</label>
      <input
        name="thumbnailText"
        type="text"
        value={formData.thumbnailText}
        onChange={handleChange}
      />

      <label>Employee size</label>
      <input
        name="size"
        type="text"
        value={formData.size}
        onChange={handleChange}
      />

      <label>Company website</label>
      <input
        name="website"
        type="text"
        value={formData.website}
        onChange={handleChange}
      />

      <label>Company slogan</label>
      <input
        name="slogan"
        type="text"
        value={formData.slogan}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Platforms</label>
      <textarea
        name="platforms"
        value={formData.platforms}
        onChange={handleChange}
      />

      <label>Business model</label>
      <textarea
        name="businessModel"
        value={formData.businessModel}
        onChange={handleChange}
      />

      <label>Images</label>
      <input type="file" name="image" multiple onChange={handleImageChange} />

      <label>Logo</label>
      <input type="file" name="logo" onChange={handleLogoChange} />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AdminStudyForm;
