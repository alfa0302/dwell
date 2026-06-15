import React from "react";
import useAuthStore from "../../../store/authStore";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function ChatList({
  chatList,
  setCurrentChat,
  currentChat,
  setShowChatModal,
}) {
  const { user } = useAuthStore();
  return (
    <div className="md:w-[40%] w-full border-l border-gray-300 py-10 px-5">
      <form className="">
        <div className="flex gap-2 items-center border border-gray-400 rounded-xl px-5 py-1.5 bg-blue-100">
          <CiSearch className="text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="text-sm outline-none flex-1"
          />
        </div>

        <button type="submit"></button>
      </form>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="bg-white border border-gray-300 text-sm px-3 py-1 cursor-pointer">
            All
          </button>
          <button className="text-sm px-3 py-1cursor-pointer">Unread</button>
        </div>
        <Link to={`/profile`}>
          <button className="md:hidden bg-white border border-gray-300 text-sm px-3 py-1 cursor-pointer">
            Back to profile
          </button>
        </Link>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {chatList?.map((list, index) => {
          const receiver = list.users.filter(
            (item) => item._id !== user._id,
          )[0];
          return (
            <div
              key={`chat_${index}`}
              className={`flex gap-2  rounded-lg px-3 py-5 ${list?._id === currentChat?._id ? "md:bg-blue-100 bg-white" : "bg-white"}`}
              onClick={() => {
                setCurrentChat(list);
                setShowChatModal(true);
              }}
            >
              <img
                src={receiver.avatar}
                alt="receiver profile picture"
                className="h-10 w-10 rounded-full border border-gray-300 object-cover"
              />
              <div className="md:w-[70%]">
                <h3 className="text-md font-semibold text-sm">
                  {receiver.username}
                </h3>
                <p className="truncate text-[12px] text-gray-500">
                  {list.lastMessage}
                </p>
              </div>
              <div className="hidden lg:flex lg:flex-1 flex-col gap-1 w-[10%] justify-center items-end">
                <p className="text-[10px] text-gray-500">5 sec ago</p>
                <div className="rounded-full bg-yellow-500 text-[10px] h-4 w-4 text-center">
                  3
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
