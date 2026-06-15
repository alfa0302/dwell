import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { isValidEmail, validatePhoneNumber } from "../../../utils/helper";

export default function EditUser({ user, setIsEditing }) {
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
  });

  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [avatarFile, setAvatarFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    setAvatar(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.email && !isValidEmail(formData.email)) {
      return setError("Invalid email");
    }

    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      return setError("Enter valid UAE number");
    }

    try {
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="lg:w-[85%] w-[90%]">
      <div className="flex lg:flex-row flex-col gap-5 px-5 py-5 border border-gray-300 rounded-lg shadow-sm bg-white">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative">
            <img
              src={avatar}
              alt="profile"
              className="h-40 w-40 md:h-60 md:w-60 rounded-lg object-cover border border-gray-300"
            />

            <label
              htmlFor="avatar"
              className="absolute top-2 right-2 bg-yellow-500 text-white p-1 rounded-full cursor-pointer"
            >
              <input
                type="file"
                id="avatar"
                onChange={handleImageChange}
                className="hidden"
              />
              <MdModeEdit />
            </label>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-5">
          <div className="border-b border-gray-300 pb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="text-xl md:text-2xl font-semibold w-full border-b border-gray-200 focus:outline-none"
            />

            <div className="flex flex-col md:flex-row lg:gap-10 gap-3 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <IoMailOutline />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-b border-gray-200 focus:outline-none w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="border-b border-gray-200 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Write something about yourself..."
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <button
              onClick={handleSubmit}
              className="bg-yellow-500 text-white px-4 py-2 rounded-xl text-sm w-full sm:w-auto"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-xl text-sm w-full sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
