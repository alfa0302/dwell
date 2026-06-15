import React, { useState, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import ChatList from "../components/ui/chat/ChatList";
import Messages from "../components/ui/chat/Messages";
import PageLoader from "../components/ui/PageLoader";
import socket from "../utils/socket";

export default function Chat() {
  const [chatList, setChatList] = useState([]);
  const [currentChat, setCurrentChat] = useState(chatList?.[0]);
  const [showChatModal, setShowChatModal] = useState(false);
  const fetchChatList = async () => {
    try {
      const list = await axiosInstance.get(API_PATHS.CHAT.GETALL);
      setChatList(list.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchChatList();
  }, []);
  useEffect(() => {
    if (chatList.length > 0) {
      setCurrentChat(chatList[0]);
    }
  }, [chatList]);
  useEffect(() => {
    if (currentChat?._id) {
      socket.emit("join_chat", currentChat._id);
    }
  }, [currentChat]);
  if (!chatList) {
    return <PageLoader />;
  }
  if (chatList.length === 0) {
    return (
      <div className="h-screen w-screen flex items-center justify-center text-gray-500">
        You don't have any chats
      </div>
    );
  }
  return (
    <div className="lg:mx-30 md:mx-10 flex min-h-screen bg-blue-100/50">
      <ChatList
        chatList={chatList}
        setCurrentChat={setCurrentChat}
        currentChat={currentChat}
        setShowChatModal={setShowChatModal}
      />
      <Messages
        currentChat={currentChat}
        setShowChatModal={setShowChatModal}
        showChatModal={showChatModal}
      />
    </div>
  );
}
