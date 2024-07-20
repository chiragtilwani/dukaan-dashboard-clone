import { MdCurrencyRupee } from "react-icons/md";

export default function Order(props) {
  return (
    <div className="grid grid-cols-5 px-3 py-[10px] text-sm">
      <span className="text-customBlue font-medium">#{props.orderId}</span>
      <span className="flex items-center">
        <span
          className={`min-h-3 min-w-3 h-3 w-3  rounded-full mr-2 ${
            props.status === "Successful" ? "bg-green-500" :props.status === "Rejected" ? "bg-red-500" : 'bg-gray-500'
          }`}
        ></span>
        {props.status}
      </span>
      <span >{props.transactionId}</span>
      <span>{props.refundDate}</span>
      <span className="flex items-center justify-end">
        <MdCurrencyRupee />
        {props.orderAmount}
      </span>
    </div>
  );
}
