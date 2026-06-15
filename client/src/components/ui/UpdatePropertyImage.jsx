import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

export default function UpdatePropertyImage({
  images,
  setImages,
  originaImages,
}) {
  const deleteImage = (indexToDelete) => {
    if (typeof imageToDelete === "string") {
      setRemovedImages((prev) => [...prev, imageToDelete]);
    }
    setImages((prev) => prev.filter((_, index) => index !== indexToDelete));
  };
  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-sm font-medium ">
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleChange}
        />
        <div className="flex items-center gap-2 flex-col py-7 border-4 border-dashed border-yellow-500 bg-yellow-100/50 rounded-lg cursor-pointer">
          <IoCloudUploadOutline className="text-3xl text-yellow-500" />
          <p className="text-gray-500">
            Upload atleat 2 images of your property
          </p>
        </div>
      </label>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="border-2 border-green-200 rounded-lg p-1 text-sm flex justify-between relative h-50"
            >
              <img
                className="object-cover h-full w-full rounded-lg"
                src={
                  typeof image === "string" ? image : URL.createObjectURL(image)
                }
                alt="property image"
              />
              <AiOutlineDelete
                className="text-red-500 text-xl cursor-pointer absolute right-1 top-1 bg-red-100 p-1 rounded-full"
                onClick={() => deleteImage(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
