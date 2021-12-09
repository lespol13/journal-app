export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dgnwxhbju/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "react-journal");
  try {
    const response = await fetch(cloudUrl, { method: "POST", body: formData });
    if (response.ok) {
      const cloudResponse = await response.json();
      return cloudResponse.secure_url;
    } else {
      throw await response.json();
    }
  } catch (error) {
    throw error;
  }
};
