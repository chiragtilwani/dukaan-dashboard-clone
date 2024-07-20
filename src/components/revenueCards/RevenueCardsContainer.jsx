import RevenueCard from "./RevenueCard";

export default function RevenueCardsContainer() {
  const cards = [
    {
      cardWithNextPaymentDate: true,
      title: "Next Payout",
      amount: "2,312.23",
      numOrders: 23,
      nextPaymentDate: "Today,4:00PM",
    },
    { title: "Amount Pending", amount: "92,312.20", numOrders: 13 },
    { title: "Amount Processed", amount: "23,92,312.19" },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {cards.map((card) => (
        <RevenueCard {...card} />
      ))}
    </div>
  );
}
