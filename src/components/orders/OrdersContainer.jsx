import SearchBar from "../searchBar/SearchBar";
import Order from "./Order";
import OrdersHeader from "./OrdersHeader";
import SortAndDownloadBtns from "./SortAndDownloadBtns";

export default function OrdersContainer() {
  const orders = [
    {
      orderId: 281209,
      status: "Successful",
      transactionId: "TRX123456",
      refundDate: "Today, 8:45 PM",
      orderAmount: 1125.0,
    },
    {
      orderId: 456789,
      status: "Successful",
      transactionId: "TRX417651",
      refundDate: "Today, 8:45 PM",
      orderAmount: 1925.0,
    },
    {
      orderId: 159753,
      status: "Rejected",
      transactionId: "TRX123456",
      refundDate: "Today, 8:45 PM",
      orderAmount: 7125.0,
    },
    {
      orderId: 745896,
      status: "Processing",
      transactionId: "TRX789312",
      refundDate: "Today, 8:45 PM",
      orderAmount: 17825.0,
    },
    {
      orderId: 365214,
      status: "Rejected",
      transactionId: "TRX159345",
      refundDate: "Today, 8:45 PM",
      orderAmount: 1525.0,
    },
    {
      orderId: 326478,
      status: "Processing",
      transactionId: "TRX754896",
      refundDate: "Today, 8:45 PM",
      orderAmount: 7825.0,
    },
    {
      orderId: 459357,
      status: "Processing",
      transactionId: "TRX153759",
      refundDate: "Today, 8:45 PM",
      orderAmount: 105.0,
    },
    {
      orderId: 786512,
      status: "Successful",
      transactionId: "TRX145236",
      refundDate: "Today, 8:45 PM",
      orderAmount: 1155.55,
    },
    {
      orderId: 129845,
      status: "Successful",
      transactionId: "TRX759361",
      refundDate: "Today, 8:45 PM",
      orderAmount: 3125.0,
    },
    {
      orderId: 369852,
      status: "Processing",
      transactionId: "TRX753159",
      refundDate: "Today, 8:45 PM",
      orderAmount: 1225.0,
    },
  ];
  return (
    <div className="bg-white rounded-lg m-6 p-4">
      <div className="flex justify-between">
        <SearchBar placeholder="Order ID or transaction ID" bgColor="white" />
        <SortAndDownloadBtns />
      </div>
      <OrdersHeader />
      <div>
        {orders.map((order, idx) => (
          <Order key={idx} {...order} />
        ))}
      </div>
    </div>
  );
}
