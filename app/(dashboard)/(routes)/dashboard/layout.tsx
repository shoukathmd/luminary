import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
