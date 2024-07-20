import React from "react";

export default function MidSection() {
  return (
    <div className="px-6">
      <span className="font-medium text-xl text-customSectionTextColor">
        Transactions | This Month
      </span>
      <div className="py-4 flex">
        <button className="flex justify-center items-center mr-2 rounded-3xl border text-customBtnTextColor bg-customHeaderBtnBg w-[7%] h-9 text-center">
          Payouts (22)
        </button>
        <button className="flex justify-center items-center rounded-3xl border bg-customBlue text-white w-[7%] h-9 text-center ">
          Refunds (6)
        </button>
      </div>
    </div>
  );
}
