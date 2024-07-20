import React from "react";
import { IoMdHome } from "react-icons/io";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaTruck } from "react-icons/fa";
import { PiSpeakerHighFill } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { PiUsersLight } from "react-icons/pi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";

export default function Items() {
  const items = [
    { name: "Home", icon: <IoMdHome /> },
    { name: "Order", icon: <HiOutlineClipboardList /> },
    { name: "Products", icon: <HiOutlineSquares2X2 /> },
    { name: "Delivery", icon: <FaTruck /> },
    { name: "Marketing", icon: <PiSpeakerHighFill /> },
    { name: "Analytics", icon: <SiGoogleanalytics /> },
    { name: "Payouts", icon: <FaMoneyBillWaveAlt /> },
    { name: "Discounts", icon: <CiDiscount1 /> },
    { name: "Audience", icon: <PiUsersLight /> },
    { name: "Appearence", icon: <IoColorPaletteOutline /> },
    { name: "Plugins", icon: <GiElectric /> },
  ];

  return (
    <div className="mx-2 text-customSideBarTextColor">
      {items.map((item) => (
        <div
          className={`w-full hover:bg-customHoverBgColor rounded flex items-center h-8 font-medium pl-2 ${
            item.name === "Analytics" ? "bg-customHoverBgColor" : ""
          }`}
        >
          {item.icon} <span className="p-2"> {item.name}</span>
        </div>
      ))}
    </div>
  );
}
