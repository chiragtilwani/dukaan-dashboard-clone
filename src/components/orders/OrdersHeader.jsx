import React from 'react'

export default function OrdersHeader() {
  return (
    <div className="grid grid-cols-5 p-2 text-sm text-customTextColor bg-customNextDateColor rounded font-medium mt-3">
        <span>Order ID</span>
        <span>Status</span>
        <span>Transaction ID</span>
        <span>Refund Date</span>
        <span className="flex justify-end">Order Amount</span>
      </div>
  )
}
