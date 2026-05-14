import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import useAuthStore from "../../store/authStore";

export default function Login({ setShow }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { login, error, loading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!formData.email || !formData.password) {
      return setFormError("All fields are required");
    }
    try {
      await login(formData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-3 min-w-[50%] md:min-w-[70%] lg:min-w-[50%]">
      <h2 className="text-xl font-semibold ">Welcome Back to Dwell!</h2>
      <h3 className="text-sm text-gray-500">Sign in to your account</h3>
      <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
        <Input
          type="text"
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
        <button type="submit" className="btn-primary rounded-lg">
          {loading ? "Please wait" : "Login"}
        </button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {formError && <p className="text-red-500 text-sm">{formError}</p>}
      <button
        className="text-sm cursor-pointer"
        onClick={() => setShow("signup")}
      >
        Don't have an account?{" "}
        <span className=" text-yellow-500 font-semibold">Sign Up</span>
      </button>
    </div>
  );
}
