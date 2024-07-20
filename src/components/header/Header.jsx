import { FaRegQuestionCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import SearchBar from "../searchBar/SearchBar";

export default function Header() {
  return (
    <div className="grid grid-cols-3 h-14 items-center px-6 bg-white shadow sticky top-0">
      <div className="flex h-12 items-center ">
        <span className="text-xl  pr-4">Payouts</span>
        <span className="flex h-12 items-center text-customTextColor text-xs">
          <FaRegQuestionCircle className="mr-1" />
          <span>How it works</span>
        </span>
      </div>
      <SearchBar placeholder="Search features, tutorials, etc."/>
      <div className="flex justify-end">
        <div className="w-[18%] flex justify-between">
          <button className="bg-customHeaderBtnBg rounded-full w-10 h-10 flex items-center justify-center">
            <img
              src="https://dashboard-clone-dukaan.vercel.app/_next/image?url=%2Fspeaker.png&w=32&q=75"
              alt="speaker"
            />
          </button>
          <button className="bg-customHeaderBtnBg rounded-full w-10 h-10 flex items-center justify-center">
            <FaCaretDown className="text-2xl text-customTextColor"/>
          </button>
        </div>
      </div>
    </div>
  );
}
