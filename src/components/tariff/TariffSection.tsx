"use client";

import Image from "next/image";
import TariffGrid from "./TariffGrid";
import TariffNotice from "./TariffNotice";
import PurchaseBlock from "@/components/purchase/PurchaseBlock";
import SkeletonCard from "@/components/tariff-card/SkeletonCard";
import { useTariffs } from "@/hooks/useTariffs";

type Props = {
  seconds: number;
};

export default function TariffSection({ seconds }: Props) {
  const showDiscount = seconds > 0;

  const { tariffs, selectedTariff, setSelectedTariff, loading, error } =
    useTariffs();

  const sortedTariffs = [...tariffs].sort((a, b) => {
    if (a.is_best && !b.is_best) return -1;
    if (!a.is_best && b.is_best) return 1;
    return b.price - a.price;
  });

  const mainTariffs = sortedTariffs.slice(0, -3);
  const lastThreeTariffs = sortedTariffs.slice(-3);

  return (
    <main className="max-w-[1216px] w-full mx-auto px-4 xl:px-0 flex flex-col xl:flex-row  xl:gap-19 relative pt-[70px] xl:pt-[204px]">
      <h1 className="absolute top-5 left-4 xl:left-0 xl:top-13 text-[22px] xs:text-[24px] xl:text-[40px] font-bold leading-[110%] pr-8">
        Выбери подходящий для себя{" "}
        <span className="text-card-accent">тариф</span>
      </h1>

      <div className=" flex-shrink-0 lg:flex xl:order-[-1] justify-center items-center mx-auto
       mt-5 xl:mt-4 w-full max-w-[390px]">
        <picture>
          <source media="(min-width: 1280px)" srcSet="/man.png" />

          <source media="(min-width: 375px)" srcSet="/man375.png" />

          <Image
            src="/man320.png"
            alt="man"
            width={100}
            height={200}
            className="w-full max-w-[100px] xl:max-w-[390px] min-[375px]:max-w-[124px] h-auto object-contain mx-auto"
            priority
          />
        </picture>
      </div>

      <div className="flex-1  xs:max-w-none">
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {loading ? (
          <>
            <div className="hidden xl:grid gap-3 grid-cols-1 lg:grid-cols-3 ">
              {/* BEST */}
              <SkeletonCard className="lg:col-span-3 xl:col-span-3 w-full xl:w-full" />

              {/* остальные */}
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>

            {/* LAST THREE */}
            <div className="w-full max-w-none grid gap-1 xs:gap-2 xl:gap-3 grid-cols-1 xl:grid-cols-3 mt-2 xl:mt-3 xl:hidden">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </>
        ) : (
          <>
            <TariffGrid
              mainTariffs={mainTariffs}
              lastThreeTariffs={lastThreeTariffs}
              selectedTariff={selectedTariff}
              setSelectedTariff={setSelectedTariff}
              showDiscount={showDiscount}
            />

            <TariffNotice />

            <PurchaseBlock />
          </>
        )}
      </div>
    </main>
  );
}
