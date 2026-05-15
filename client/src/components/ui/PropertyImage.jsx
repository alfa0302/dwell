import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

export default function PropertyImage({ formData, setFormData }) {
  const deleteImage = (indexToDelete) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToDelete),
    }));
  };
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-sm font-medium ">
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              images: Array.from(e.target.files),
            }))
          }
        />
        <div className="flex items-center gap-2 flex-col py-7 border-4 border-dashed border-yellow-500 bg-yellow-100/50 rounded-lg cursor-pointer">
          <IoCloudUploadOutline className="text-3xl text-yellow-500" />
          <p className="text-gray-500">
            Upload atleat 2 images of your property
          </p>
        </div>
      </label>

      {formData.images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          {formData.images.map((image, index) => (
            <div
              key={index}
              className="border-2 border-green-500 rounded-lg p-2 text-sm flex justify-between"
            >
              <span className="flex-1 truncate">{image.name}</span>
              <AiOutlineDelete
                className="text-red-500 text-[15px] cursor-pointer"
                onClick={() => deleteImage(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
