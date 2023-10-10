import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../firebaseConfig";
import { addPortfolio } from "../api/FirestoreApi";

function AdminPortfolioForm() {
  const initialFormData = {
    projectName: "",
    category: "",
    thumbnailImage: [],
    images: [],
    projectDesc: "",
    description: "",
    designers: "",
    companyName: "",
    partners: "",
    awards: "",
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
        const storageRefImg = ref(storage, `portfolioImages/${image.name}`);
        await uploadBytes(storageRefImg, image);
        return getDownloadURL(storageRefImg);
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      images: uploadedImageUrls,
    }));
  };

  const handleThumbnailChange = async (e) => {
    const selectedThumbnail = Array.from(e.target.files);

    const uploadedThumbnailUrls = await Promise.all(
      selectedThumbnail.map(async (thumbnailImage) => {
        const storageRefThumbnail = ref(
          storage,
          `thumbnailImage/${thumbnailImage.name}`
        );
        await uploadBytes(storageRefThumbnail, thumbnailImage);
        return getDownloadURL(storageRefThumbnail);
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      thumbnailImage: uploadedThumbnailUrls,
    }));
  };

  const postPortfolioData = async (e) => {
    e.preventDefault();

    const portfolioData = { ...formData };

    if (
      portfolioData.projectName.trim() === "" ||
      portfolioData.category.trim() === "" ||
      portfolioData.thumbnailImage.length === 0 ||
      portfolioData.images.length === 0 ||
      portfolioData.projectDesc.trim() === "" ||
      portfolioData.description.trim() === "" ||
      portfolioData.designers.trim() === "" ||
      portfolioData.companyName.trim() === "" ||
      portfolioData.partners.trim() === "" ||
      portfolioData.awards.trim() === ""
    ) {
      setErrorMessage(true);
      return;
    }

    addPortfolio(portfolioData)
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
        console.log("error adding portfolio ", err);
      });
  };

  return (
    <form onSubmit={postPortfolioData} className="admin__dashboard--jobForm">
      {(isPostSuccessful && (
        <h1 style={{ color: "green" }}>Portfolio posted successfully</h1>
      )) ||
        (errorMessage && (
          <h1 style={{ color: "red" }}>Portfolio post failed</h1>
        ))}
      <label>Portfolio name</label>
      <input
        name="projectName"
        type="text"
        value={formData.projectName}
        onChange={handleChange}
      />

      <label>Category</label>
      <input
        name="category"
        type="text"
        value={formData.category}
        onChange={handleChange}
      />

      <label>Project description</label>
      <input
        name="projectDesc"
        type="text"
        value={formData.projectDesc}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        type="text"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Designers</label>
      <input
        name="designers"
        type="text"
        value={formData.designers}
        onChange={handleChange}
      />

      <label>Company name</label>
      <input
        name="companyName"
        type="text"
        value={formData.companyName}
        onChange={handleChange}
      />

      <label>Partners</label>
      <input
        name="partners"
        type="text"
        value={formData.partners}
        onChange={handleChange}
      />

      <label>Awards</label>
      <input
        name="awards"
        type="text"
        value={formData.awards}
        onChange={handleChange}
      />

      <label>Images</label>
      <input name="images" type="file" onChange={handleImageChange} multiple />

      <label>Thumbnail image</label>
      <input
        name="thumbnailImage"
        type="file"
        onChange={handleThumbnailChange}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AdminPortfolioForm;
