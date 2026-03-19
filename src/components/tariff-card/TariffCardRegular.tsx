"use client";

import { TariffCardProps, TariffWithUUID } from "@/types/tariff";
import { calculateDiscount } from "@/utils/calculateDiscount";

export default function TariffCardRegular({
  tariff,
  selected,
  onSelect,
}: TariffCardProps) {
  const discount = calculateDiscount(tariff.full_price, tariff.price);
  const discountVisible = tariff.full_price > tariff.price;


  return (
    <div
      onClick={() => onSelect(tariff.uuid)}
      className={`
        relative
        w-full
        cursor-pointer
        transition
        duration-200
        border-2
        ${selected ? "border-card-accent shadow-lg" : "border-card-border"}
        rounded-2xl
        xl:rounded-[40px]
        bg-card-bg
      `}
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden xl:block pt-[70px] px-6 pb-8 hover:scale-[1.02] w-[240px]">
        {discountVisible && (
          <div className="absolute top-0 left-[55px] w-16 h-10 bg-[rgba(253,86,86,1)] text-white flex items-center justify-center rounded">
            <span className="text-[22px]">-{discount}%</span>
          </div>
        )}

        <div className="text-[26px] leading-[120%] mb-9 ml-10">
          {tariff.period}
        </div>

        <div className="flex flex-col items-end pr-5">
          <div className="text-[50px] leading-[80%]">{tariff.price} ₽</div>
          {discountVisible && (
            <div className="text-[24px] text-[#919191] line-through">
              {tariff.full_price} ₽
            </div>
          )}
        </div>

        <p className="text-[16px] text-white mt-10">{tariff.text}</p>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="xl:hidden pt-4 pl-4 xs:pl-7 pb-5 xs:pb-6 rounded-[28px]  relative">
        {discountVisible && (
          <div className="absolute top-0 right-8 w-[44px] h-[23px] bg-[rgba(253,86,86,1)] text-white flex items-center justify-center rounded-md">
            <span className="text-[13px]">-{discount}%</span>
          </div>
        )}

        <div className="text-[16px] xs:mb-2">{tariff.period}</div>

        <div className="flex justify-between pr-4 gap-10 xs:gap-18">
          <div className="flex flex-col items-end">
            <div className="text-[34px] whitespace-nowrap">
              {tariff.price} ₽
            </div>
            {discountVisible && (
              <div className="text-sm leading-[20%] text-[#919191] line-through">
                {tariff.full_price} ₽
              </div>
            )}
          </div>

          <p className="text-sm leading-4 text-white max-w-[170px]">
            <span className="xl:hidden">{tariff.mobileText}</span>
            <span className="hidden xl:inline">{tariff.text}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function mapTariffs(tariffs: TariffWithUUID[]) {
  return tariffs.map((tariff, index) => ({
    ...tariff,
    mobileText:
      index === 1
        ? capitalize(tariff.text.split(" ").slice(1, 4).join(" "))
        : tariff.text,
  }));
}
