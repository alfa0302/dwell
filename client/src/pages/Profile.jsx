import React, { useState, useRef } from "react";
import PageLayout from "../components/layout/PageLayout";
import UserInfo from "../components/ui/profile/UserInfo";
import UserList from "../components/ui/profile/UserList";
import Message from "../components/ui/profile/Message";
import Chat from "../components/ui/profile/Chat";

export default function Profile() {
  const user = {
    id: "user_98765",
    name: "Ahmed Hassan",
    avatar: "https://www.istockphoto.com/illustrations/profile-picture",
    role: "Premium Agent",
    email: "ahmedhassan@gmail.com",
    phone: "+971 50 123 4567",
    whatsapp: "+971 50 123 4567",
    joinedDate: "January 2023",
  };
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const handleScroll = () => {
    const element = scrollRef.current;
    const totalScroll = element.scrollHeight - element.clientHeight;
    const currentScroll = element.scrollTop;

    const progress = (currentScroll / totalScroll) * 100;

    setScrollProgress(progress);
  };
  return (
    <>
      <PageLayout>
        <div className="px-30 grid grid-cols-2 gap-10 overflow-hidden">
          <div className="mt-20 h-screen relative">
            <div className="absolute right-0 top-0 h-full w-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="w-full bg-yellow-500 rounded-full transition-all duration-150"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>
            <div
              className="h-full overflow-auto custom-scroll pr-4"
              ref={scrollRef}
              onScroll={handleScroll}
            >
              <UserInfo />
              <UserList />
            </div>
          </div>
          <div className="pt-20 bg-yellow-50 flex flex-col">
            <Message />
            {/* <Chat /> */}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
