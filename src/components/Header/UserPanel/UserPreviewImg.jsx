import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";

export const UserPreviewImg = ({ file, getPhoto, avatarURL }) => {
  const [preview, setPreview] = useState(avatarURL);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview(reader.result);
        getPhoto(reader.result);
      };
    }
  }, [getPhoto, file]);

  return (
    <div>
      {preview ? (
        <div src={preview} alt="preview" width="100%" height="100%" />
      ) : (
        <Loader />
      )}
    </div>
  );
};

