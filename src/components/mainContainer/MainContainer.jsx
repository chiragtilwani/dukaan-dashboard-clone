import React from "react";
import Header from "../header/Header";
import RevenueCardsContainer from "../revenueCards/RevenueCardsContainer";
import OrdersContainer from "../orders/OrdersContainer";
import Footer from "../footer/Footer";
import MidSection from "../midSection/MidSection";
import TopSection from "../topSection/TopSection";

export default function MainContainer() {
  return (
    <div className="w-[88%] h-screen overflow-y-auto">
      <Header />
      <TopSection />
      <RevenueCardsContainer />
      <MidSection />
      <OrdersContainer />
      <Footer />
    </div>
  );
}
