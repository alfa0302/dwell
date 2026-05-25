import React, { useState, useRef } from "react";
import PageLayout from "../components/layout/PageLayout";
import UserInfo from "../components/ui/profile/UserInfo";
import UserSummaryLayout from "../components/ui/profile/UserSummaryLayout";
import useAuthStore from "../store/authStore";

export default function Profile() {
  const { user } = useAuthStore();
  return (
    <>
      <PageLayout>
        {/* <div className="px-30 grid grid-cols-2 gap-10 overflow-hidden">
          <div className="mt-20 h-screen relative">
            <div className="absolute right-0 top-0 h-full w-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-full bg-yellow-500 rounded-full transition-all duration-150" />
            </div>
            <div className="h-full overflow-auto custom-scroll pr-4">
              <UserInfo />
              <UserList />
            </div>
          </div>
          <div className="pt-20 bg-yellow-50 flex flex-col">
            <Message />
          </div>
        </div> */}
        <div className="px-30 mt-30 flex flex-col items-center gap-20">
          <UserInfo user={user} />
          <UserSummaryLayout />
        </div>
      </PageLayout>
    </>
  );
}
