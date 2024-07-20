import { IoMdSearch } from "react-icons/io";

export default function SearchBar(props) {
  return (
    <div
      className={`${
        props.bgColor === "white" ? "bg-white" : "bg-customNextDateColor"
      }  ${
        props.bgColor === "white" ? " w-[18.75rem]" : ""
      } flex items-center h-10 rounded ${
        props.bgColor === "white" ? "border-[.05rem] border-[#D9D9D9]" : ""
      }`}
    >
      <IoMdSearch className="text-gray-500 mx-2" />
      <input
        type="text"
        placeholder={props.placeholder}
        className={`${
          props.bgColor === "white" ? "bg-white" : "bg-customNextDateColor"
        } w-[98%] outline-0`}
      />
    </div>
  );
}
