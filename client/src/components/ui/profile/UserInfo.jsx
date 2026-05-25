import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import moment from "moment";

export default function UserInfo({ user }) {
  return (
    <div className="w-[80%] p-3">
      <div className="flex justify-between p-5 border border-gray-300 rounded-lg shadow-sm bg-white">
        <div className="">
          <img
            src={user?.avatar}
            alt="profile picture"
            className="h-60 w-60 rounded-lg border border-gray-400"
          />
        </div>
        <div className="flex flex-col items-star p-5 flex-1 gap-5">
          <div className="flex justify-between pb-5 border-b border-gray-400 w-full">
            <div className="">
              <h2 className="text-2xl font-semibold mb-2.5 ">
                {user.username}
              </h2>
              <p className="text-gray-500">
                Joined on {moment(user.joined).format("DD MMMM YYYY")}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button className="bg-yellow-500 p-2 rounded-full text-lg text-white cursor-pointer">
                <HiOutlinePencilSquare />
              </button>
              <button className="bg-yellow-500 p-2 rounded-full text-lg text-white cursor-pointer">
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
          <div className="flex gap-10 text-gray-600">
            <div className="flex gap-2 items-center">
              <IoMailOutline />
              <span>{user?.email}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhone />
              <span>+971 574 721 984</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaWhatsapp />
              <span>+971 574 721 984</span>
            </div>
          </div>
          <Link to="/create-listing" className="">
            <button className="mx-auto btn-primary">Create New Listing</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
