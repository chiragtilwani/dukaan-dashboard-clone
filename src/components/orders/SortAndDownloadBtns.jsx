import { RiArrowUpDownLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";

export default function SortAndDownloadBtns() {
  return (
    <div className="text-customTextColor flex w-[10%] justify-around">
          <button className="flex items-center justify-center border-[.05rem] border-[#D9D9D9] w-[50%] rounded">
            Sort <RiArrowUpDownLine className="ml-1"/>
          </button>
          <button className="flex justify-center items-center border-[.05rem] border-[#D9D9D9] w-[25%] rounded">
            <FiDownload />
          </button>
        </div>
  )
}
