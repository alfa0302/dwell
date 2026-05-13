import React, { useState } from "react";
import Input from "../../components/ui/Input";
import { FaRegUser } from "react-icons/fa";

export default function SignUp({ setShow }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
  });

  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
      }));

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setError("All fields are required");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      console.log(formData);

      // api call here

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-3 border border-gray-300 rounded-lg p-5 min-w-[30%]">
      <h2 className="text-xl font-semibold">Sign Up</h2>

      <h3 className="text-sm">Create your account to continue</h3>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
            />
          </label>
        </div>

        <Input
          type="text"
          title="username"
          label="Enter username"
          placeholder="username"
          onChange={handleChange}
        />

        <Input
          type="email"
          title="email"
          label="Enter email"
          placeholder="email"
          onChange={handleChange}
        />

        <Input
          type="password"
          title="password"
          label="Enter password"
          placeholder="password"
          onChange={handleChange}
        />

        <Input
          type="password"
          title="confirmPassword"
          label="Confirm password"
          placeholder="confirm password"
          onChange={handleChange}
        />

        <button type="submit" className="btn-primary rounded-lg">
          {loading ? "Please wait..." : "Sign Up"}
        </button>
      </form>

      <p className="text-red-500 text-sm">{error}</p>

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
