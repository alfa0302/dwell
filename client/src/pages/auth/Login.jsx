import React, { useState } from "react";
import Input from "../../components/ui/Input";

export default function Login({ setShow }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-3 border border-gray-300 rounded-lg p-5 min-w-[30%]">
      <h2 className="text-xl font-semibold">Login</h2>
      <h3 className="text-sm">Enter your credentials to login</h3>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <p className="text-red-500 text-sm">{error}</p>
      <button
        className="text-sm cursor-pointer"
        onClick={() => setShow("signup")}
      >
        Don't have an account?{" "}
        <span className=" text-yellow-500 font-semibold">
          {loading ? "Please wait" : "Login"}
        </span>
      </button>
    </div>
  );
}
