import { FaChevronDown } from "react-icons/fa";

export default function TopSection() {
  return (
    <div className="flex justify-between w-full px-6 h-12 items-center mt-5">
      <span className="font-medium text-xl">Overview</span>
      <span className="border rounded w-[10%] flex justify-between items-center h-8 p-4 bg-white text-customTextColor ">
        This Month <FaChevronDown />
      </span>
    </div>
  );
}
