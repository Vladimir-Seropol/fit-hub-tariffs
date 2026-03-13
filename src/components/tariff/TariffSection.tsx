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
    <main className="max-w-[1216px] w-full mx-auto px-4 xl:px-0 flex flex-col xl:flex-row items-center xl:gap-19 relative pt-[70px] xl:pt-[204px]">

      <h1 className="absolute top-5 left-4 xl:left-0 xl:top-13 text-[22px] xs:text-[24px] xl:text-[40px] font-bold leading-[110%]">
        Выбери подходящий для себя{" "}
        <span className="text-orange-500">тариф</span>
      </h1>

      <div className="flex-shrink-0 lg:flex xl:order-[-1] items-center justify-center mt-5 w-full max-w-[390px]">

        <Image
          src="/man.png"
          alt="man"
          width={390}
          height={390}
          className="hidden xl:block w-full h-auto object-contain"
        />

        <Image
          src="/man375.png"
          alt="man"
          width={124}
          height={250}
          className="hidden min-[375px]:block xl:hidden max-w-[124px] w-full h-auto object-contain mx-auto"
        />

        <Image
          src="/man320.png"
          alt="man"
          width={100}
          height={200}
          className="block min-[375px]:hidden max-w-[100px] w-full h-auto object-contain mx-auto"
        />

      </div>

      <div className="flex-1">
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {loading ? (
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
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