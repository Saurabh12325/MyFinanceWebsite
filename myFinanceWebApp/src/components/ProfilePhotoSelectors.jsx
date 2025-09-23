import { Trash, Upload, User } from "lucide-react";
import { useRef, useState } from "react"; // Added missing `useState` import

// Corrected prop destructuring. Props are passed as a single object.
const ProfilePhotoSelectors = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative">
          <User className="text-purple-500" size={35} />
          <button
            onClick={onChooseFile}
            className="w-8 h-8 flex justify-center items-center text-white rounded-full absolute -bottom-1 -right-1"
          >
            <Upload className="text-purple-500" size={15} />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button
            onClick={handleRemoveImage}
            className="w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1"
          >
            <Trash size={15} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelectors;
// dfdsf