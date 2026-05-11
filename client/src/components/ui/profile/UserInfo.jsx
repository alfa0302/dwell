import React from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function UserInfo() {
  const icon = "font-semibold";
  const details = "flex gap-2 items-center text-gray-700";
  const user = {
    id: "user_98765",
    name: "Ahmed Hassan",
    avatar:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
    role: "Premium Agent",
    email: "ahmedhassan@gmail.com",
    phone: "+971 50 123 4567",
    whatsapp: "+971 50 123 4567",
    joinedDate: "January 2023",
  };
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Profile</h2>
      <div className="flex justify-between p-5 border border-gray-200 rounded-lg shadow-sm bg-yellow-50">
        <div className="flex flex-col items-center gap-1">
          <img
            src={user?.avatar}
            alt="profile picture"
            className="h-22 w-22 rounded-full"
          />

          <div className="font-semibold text-sm">{user?.name}</div>
          <div className="text-sm text-gray-600">{user?.role}</div>
        </div>
        <div className="flex flex-col items-start justify-between">
          <div className={details}>
            <IoMailOutline className={icon} /> {user?.email}
          </div>
          <div className={details}>
            <IoCallOutline className={icon} />
            {user?.phone}
          </div>
          <div className={details}>
            <IoLogoWhatsapp className={icon} />
            {user?.whatsapp}
          </div>
          <button className="btn-primary">Update Profile</button>
        </div>
      </div>
    </div>
  );
}
