import React, { useState, useEffect } from "react";
import Input from "../../components/ui/Input";
import { FaRegUser } from "react-icons/fa";
import { isValidEmail } from "../../utils/helper";
import useAuthStore from "../../store/authStore";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setShow }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });
  const [image, setImage] = useState(null);
  const [formError, setFormError] = useState("");
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();

  const { register, loading, error } = useAuthStore();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setFormError("All fields are required");
    }
    if (!isValidEmail(formData.email)) {
      return setFormError("Invalid email");
    }
    if (formData.password !== formData.confirmPassword) {
      return setFormError("Passwords do not match");
    }
    try {
      await register(formData);
      if (image) {
        const uploadData = new FormData();
        uploadData.append("image", image);
        const response = await axiosInstance.post(
          API_PATHS.UPLOAD.IMAGE,
          uploadData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
      }
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // revoke preview url to prevent memory leak
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="flex flex-col min-w-[50%] gap-3 md:min-w-[70%] lg:min-w-[50%]">
      <h2 className="text-xl font-semibold">Welcome to Dwell!</h2>

      <h3 className="text-sm text-gray-500">Create your account to continue</h3>

      <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 bg-gray-100 flex items-center justify-center">
            {preview ? (
              <img
                src={preview}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaRegUser className="h-10 w-10 text-gray-600" />
            )}
          </div>
          <label className="text-sm text-yellow-500 font-semibold cursor-pointer">
            Select Profile Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
              required={false}
            />
          </label>
        </div>
        <Input
          type="text"
          title="username"
          label="Enter username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />

        <Input
          type="email"
          title="email"
          label="Enter email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          type="password"
          title="password"
          label="Enter password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          type="password"
          title="confirmPassword"
          label="Confirm password"
          placeholder="confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="btn-primary rounded-lg">
          {loading ? "Please Wait" : "Sign Up"}
        </button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {formError && <p className="text-red-500 text-sm">{formError}</p>}
      <button
        className="text-sm cursor-pointer"
        onClick={() => setShow("login")}
      >
        Already have an account?{" "}
        <span className="text-yellow-500 font-semibold">Login</span>
      </button>
    </div>
  );
}
