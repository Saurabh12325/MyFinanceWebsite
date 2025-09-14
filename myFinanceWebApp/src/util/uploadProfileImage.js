const CLOUDINARY_UPLOAD_PRESET = "MyFinance";

export const uploadProfileImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
}