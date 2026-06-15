import React, { useState } from "react";
import {
  IoMailOutline,
  IoAddCircleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import moment from "moment";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/authStore";
import EditUser from "./EditUser";

export default function UserInfo({ user }) {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);

  const logoutUser = async () => {
    try {
      await logout();
      navigate("/auth", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  if (isEditing) {
    return <EditUser setIsEditing={setIsEditing} user={user} />;
  }
  return (
    <div className="lg:w-[85%] w-[90%]">
      <div className="flex lg:flex-row flex-col justify-between items-center px-5 py-2 border border-gray-300 rounded-lg shadow-sm bg-white">
        <div className="">
          <img
            src={user?.avatar}
            alt="profile picture"
            className="h-60 w-60 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-star p-5 flex-1 gap-5">
          <div className="flex justify-between pb-5 border-b border-gray-400 w-full">
            <div className="">
              <h2 className="text-2xl font-semibold mb-2 ">{user.username}</h2>
              {/* <p className="text-gray-500 text-sm">
                Joined {moment(user.joined).format("DD MMMM YYYY")}
              </p> */}
              <div className="flex lg:flex-row flex-col lg:gap-10 gap-2 text-gray-500 text-sm">
                <div className="flex gap-2 items-center">
                  <IoMailOutline />
                  <span>{user?.email}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FaPhone />
                  <span>{user?.phone}</span>
                </div>
                {/* <div className="flex gap-2 items-center">
              <FaWhatsapp />
              <span>+971 574 721 984</span>
            </div> */}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="bg-yellow-500 p-2 rounded-full text-lg text-white cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                <HiOutlinePencilSquare />
              </button>
              {/* <button className="bg-yellow-500 p-2 rounded-full text-lg text-white cursor-pointer">
                <RiDeleteBinLine />
              </button> */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-gray-600 text-sm">{user?.bio}</p>
          </div>
          <div className="flex  md:gap-5 gap-2 flex-wrap">
            <Link to="/create-listing" className="">
              <button className="flex gap-2 items-center bg-yellow-500 rounded-xl cursor-pointer text-white  px-3 py-1 text-sm">
                <IoAddCircleOutline className="text-lg" />
                New Listing
              </button>
            </Link>
            <Link to="/chat" className="">
              <button className="flex gap-2 items-center bg-yellow-500 rounded-xl cursor-pointer text-white  px-3 py-1 text-sm">
                <FiMessageCircle className="text-lg" /> Messages
              </button>
            </Link>
            <button
              className="flex gap-2 items-center bg-yellow-500 rounded-xl cursor-pointer text-white  px-3 py-1 text-sm"
              onClick={logoutUser}
            >
              <IoLogOutOutline className="text-lg" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
