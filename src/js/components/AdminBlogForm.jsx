import { useState } from "react";
import { storage } from "../../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addBlog } from "../api/FirestoreApi";

function AdminBlogForm() {
  const initialFormData = {
    blogName: "",
    industry: "",
    likes: "",
    authorName: "",
    authorLastName: "",
    createdAt: Date(),
    thumbnailImage: [],
    image: [],
    description: "",
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
        const storageRefImg = ref(storage, `blogImages/${image.name}`);
        await uploadBytes(storageRefImg, image);
        return getDownloadURL(storageRefImg);
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      image: uploadedImageUrls,
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

  const postBlogData = async (e) => {
    e.preventDefault();

    const blogData = { ...formData };

    if (
      blogData.authorName.trim() === "" ||
      blogData.authorLastName.trim() === "" ||
      blogData.blogName.trim() === "" ||
      blogData.industry.trim() === "" ||
      blogData.likes.trim() === "" ||
      blogData.description.trim() === "" ||
      blogData.thumbnailImage.length === 0 ||
      blogData.image.length === 0
    ) {
      setErrorMessage(true);
      return;
    }

    console.log(blogData);

    addBlog(blogData)
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
        console.log("error adding blog", err);
      });
  };

  return (
    <form onSubmit={postBlogData} className="admin__dashboard--jobForm">
      {(isPostSuccessful && (
        <h1 style={{ color: "green" }}>Blog posted successfully</h1>
      )) ||
        (errorMessage && <h1 style={{ color: "red" }}>Blog post failed</h1>)}
      <label>Blog name</label>
      <input
        name="blogName"
        type="text"
        value={formData.blogName}
        onChange={handleChange}
      />

      <label>Industry</label>
      <input
        name="industry"
        type="text"
        value={formData.industry}
        onChange={handleChange}
      />

      <label>Likes</label>
      <input
        name="likes"
        type="text"
        value={formData.likes}
        onChange={handleChange}
      />

      <label>Author name</label>
      <input
        name="authorName"
        type="text"
        value={formData.authorName}
        onChange={handleChange}
      />

      <label>Author last name</label>
      <input
        name="authorLastName"
        type="text"
        value={formData.authorLastName}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Thumbnail image</label>
      <input
        name="thumbnailImage"
        type="file"
        onChange={handleThumbnailChange}
      />

      <label>Image</label>
      <input name="image" type="file" onChange={handleImageChange} />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AdminBlogForm;
