import React, { useEffect, useState, useRef } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";
import useAuthStore from "../../../store/authStore";
import socket from "../../../utils/socket";
import MessageContent from "./MessageContent";

export default function Messages({
  currentChat,
  setShowChatModal,
  showChatModal,
}) {
  const [messages, setMessages] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");
  const { user } = useAuthStore();
  const mobileMessagesRef = useRef(null);
  const desktopMessagesRef = useRef(null);
  const receiver = currentChat?.users?.find((item) => item._id !== user._id);

  const getCurrentChat = async () => {
    try {
      const chat = await axiosInstance.get(
        API_PATHS.CHAT.GETBYID(currentChat._id),
      );

      setMessages(chat.data.data.messages);
    } catch (error) {
      console.error(error);
    }
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      if (!currentChat || !user) {
        return console.log("Sender and receiver required");
      }
      if (!messageToSend) {
        return console.log("Enter a message to send");
      }
      const message = await axiosInstance.post(API_PATHS.MESSAGE.CREATE, {
        chatId: currentChat._id,
        text: messageToSend,
      });
      setMessages((prev) => [...prev, message.data.data]);
      setMessageToSend("");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (currentChat?._id) {
      getCurrentChat();
    }
  }, [currentChat]);

  useEffect(() => {
    socket.on("receive_message", (message) => {
      if (
        message.chatId === currentChat?._id &&
        message.userId._id !== user._id
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });
    return () => {
      socket.off("receive_message");
    };
  }, [currentChat, user]);
  useEffect(() => {
    const container = showChatModal
      ? mobileMessagesRef.current
      : desktopMessagesRef.current;

    if (container) {
      setTimeout(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [messages, showChatModal]);

  return (
    <>
      {showChatModal && (
        <div className="md:hidden border-l border-gray-300 py-5 px-5 bg-white m-5 rounded-lg h-[95vh] flex flex-col fixed inset-0 z-50">
          <MessageContent
            containerRef={mobileMessagesRef}
            receiver={receiver}
            messages={messages}
            user={user}
            setShowChatModal={setShowChatModal}
            sendMessage={sendMessage}
            messageToSend={messageToSend}
            setMessageToSend={setMessageToSend}
          />
        </div>
      )}

      <div className="hidden md:flex md:flex-1 border-l border-gray-300 py-5 px-5 bg-white m-5 rounded-lg max-h-[95vh] flex-col justify-between">
        <MessageContent
          containerRef={desktopMessagesRef}
          receiver={receiver}
          messages={messages}
          user={user}
          setShowChatModal={setShowChatModal}
          sendMessage={sendMessage}
          messageToSend={messageToSend}
          setMessageToSend={setMessageToSend}
        />
      </div>
    </>
  );
}
