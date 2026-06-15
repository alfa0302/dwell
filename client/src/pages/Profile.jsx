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
        <div className="lg:px-30 px-10 mt-30 flex flex-col items-center gap-20">
          <UserInfo user={user} />
          <UserSummaryLayout />
        </div>
      </PageLayout>
    </>
  );
}
