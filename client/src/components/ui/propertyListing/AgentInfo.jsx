import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";
import { IoChatbubbleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function AgentInfo({ userId, contact }) {
  const [agent, setAgent] = useState("");
  const navigate = useNavigate();
  const fetchAgent = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.USER.GETBYID(userId));
      setAgent(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createChat = async () => {
    try {
      await axiosInstance.post(API_PATHS.CHAT.CREATE, {
        receiverId: agent._id,
      });
      navigate("/chat");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAgent();
  }, []);
  return (
    <div className="min-w-[20%] bg-white rounded-lg flex flex-col justify-center items-center gap-2.5 border border-gray-300 p-2 min-h-70">
      <h3 className="text-sm font-bold text-gray-700">Agent Info</h3>
      <img
        src={agent.avatar}
        alt="profile picture"
        className="h-17 w-17 border-2 border-gray-500 rounded-full p-1 object-cover"
      />
      <p className="font-semibold">{agent.username}</p>
      <p className="text-gray-700 text-sm">{contact.email}</p>
      <p className="text-gray-700 text-sm">{contact.phone}</p>
      <button
        className=" flex gap-2 bg-yellow-600 text-white items-center px-4 py-1 rounded-lg cursor-pointer text-sm"
        onClick={createChat}
      >
        <span>Chat with agent</span> <IoChatbubbleSharp className="font-bold" />
      </button>
    </div>
  );
}
