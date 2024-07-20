import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-customFooterTextColor  flex w-full h-12 justify-center items-center">
      Made with <FaHeart className="w-6" color="red" /> by{" "}
      <span className="p-1 text-customFooterTextColor font-bold underline">
        <Link to="https://www.linkedin.com/in/chiragtilwani/">
          Chirag Tilwani
        </Link>
      </span>
    </div>
  );
}
