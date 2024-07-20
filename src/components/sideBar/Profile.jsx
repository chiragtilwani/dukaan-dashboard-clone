import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="flex justify-between w-full h-20 flex items-center justify-between p-2">
      <div className="flex w-[80%]">
        <img
          className="w-[30%] rounded-full pr-2"
          src="https://scontent.fblr4-5.fna.fbcdn.net/v/t39.30808-6/306134946_497173189083308_194551036885657956_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IobhMPC0-7AQ7kNvgE94Rj8&_nc_ht=scontent.fblr4-5.fna&oh=00_AYAOBeDAi67wZINvAlVYRsxZYMDfnwy5aRbHt5e-lTBuGQ&oe=66A1D820"
          alt=""
        />
        <div className="flex flex-col text-sm">
          <span>ELT</span>
          <Link
            to="https://github.com/chiragtilwani/ecommerce-frontend"
            className="text-xs underline text-customSideBarTextColor font-thin"
          >
            Visit Store
          </Link>
        </div>
      </div>
      <FaChevronDown />
    </div>
  );
}
