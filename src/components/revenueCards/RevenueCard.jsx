import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";

export default function RevenueCard(props) {
  return (
    <div
      className={
        props.cardWithNextPaymentDate
          ? "bg-customBlue rounded-lg flex flex-col shadow-sm text-white hover:bg-customDarkBlue h-fit"
          : "bg-white rounded-lg flex flex-col shadow-sm text-black h-fit"
      }
    >
      <div className="py-4">
        <div
          className={`pl-4 flex h-6 items-center ${
            !props.cardWithNextPaymentDate
              ? "text-customTextColor"
              : "text-white"
          }`}
        >
          <span className="pr-2">{props.title}</span>
          <FaRegQuestionCircle />
        </div>
        <div className="flex justify-between px-4 font-medium items-center">
          <span className="text-3xl flex items-center">
            <MdCurrencyRupee />
            {props.amount}
          </span>
          {props.numOrders ? (
            <span
              className={`underline flex items-center ${
                props.cardWithNextPaymentDate ? "text-white" : "text-customBlue"
              } `}
            >
              {props.numOrders} Orders <FaChevronRight />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {props.cardWithNextPaymentDate ? (
        <div
          className={`pl-4 bg-customDarkBlue rounded-lg flex justify-between px-4 h-10 items-center text-customNextDateColor ${
            !props.cardWithNextPaymentDate && hidden
          }`}
        >
          <span>Next Payment Date:</span>
          <span>{props.nextPaymentDate}</span>
        </div>
      ) : null}
    </div>
  );
}
