import { CiWallet } from "react-icons/ci";

export default function () {
  return (
    <div className="flex h-12  w-[94%] m-2 rounded bg-customAvailableColorBg items-center justify-around">
      <div>
        <CiWallet className="text-customSideBarTextColor bg-customHoverBgColor text-3xl p-1 rounded" />
      </div>
      <div className="flex flex-col w-[70%] ">
        <span className="text-customSideBarTextColor text-sm">
          Available Credits
        </span>
        <span className="font-medium">224.10</span>
      </div>
    </div>
  );
}
