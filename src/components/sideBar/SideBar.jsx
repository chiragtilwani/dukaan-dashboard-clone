import React from "react";
import Profile from "./Profile";
import Items from "./Items";
import AvailableCredit from "./AvailableCredit";

export default function SideBar() {
  return (
    <div className="w-[12%] h-screen bg-customSideBarBlue text-white flex flex-col justify-between items-center p-2">
      <div>
        <Profile />
        <Items />
      </div>
      <AvailableCredit />
    </div>
  );
}
