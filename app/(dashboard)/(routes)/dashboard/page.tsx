import { UserButton } from "@clerk/nextjs";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};

export default LandingPage;
