import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";
import { IoChatbubbleSharp } from "react-icons/io5";

export default function AgentInfo({ userId, contact }) {
  const [agent, setAgent] = useState("");
  const fetchAgent = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.USER.GETBYID(userId));
      setAgent(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAgent();
  }, []);
  return (
    <div className="w-[25%] bg-white rounded-lg shadow-sm flex flex-col justify-center items-center gap-2">
      <img
        src={agent.avatar}
        alt="profile picture"
        className="h-17 w-17 border-2 border-gray-500 rounded-full p-1"
      />
      <p className="font-semibold">{agent.username}</p>
      <p className="text-gray-700">{contact.email}</p>
      <p className="text-gray-700">{contact.phone}</p>
      <button className=" flex gap-2 bg-yellow-600 text-white items-center px-2 py-1 rounded-lg">
        <span>Chat with agent</span> <IoChatbubbleSharp className="font-bold" />
      </button>
    </div>
  );
}
