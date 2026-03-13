"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TariffSection from "@/components/tariff/TariffSection";
import { useTimer } from "@/hooks/useTimer";

export default function Home() {
  const seconds = useTimer(120);

  return (
    <div className="min-h-screen bg-[#1e2426] text-white rounded-[30px]">
      <Header seconds={seconds} />

      <TariffSection seconds={seconds} />

      <Footer />
    </div>
  );
}