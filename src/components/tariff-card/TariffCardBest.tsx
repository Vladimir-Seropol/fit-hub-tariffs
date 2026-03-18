"use client";

import { TariffCardProps } from "@/types/tariff";
import { calculateDiscount } from "@/utils/calculateDiscount";

export default function TariffCardBest({
  tariff,
  selected,
  onSelect,
  className = "",
}: TariffCardProps & { className?: string }) {
  const discount = calculateDiscount(tariff.full_price, tariff.price);
  const discountVisible = tariff.full_price > tariff.price;

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const mobileText = capitalize(
    tariff.text.split(" ").slice(4, 8).join(" ") || tariff.text
  );

  return (
    <div
      onClick={() => onSelect(tariff.uuid)}
      className={`
        relative
        h-full
        w-full
        cursor-pointer
        transition-all
        duration-200
        bg-[rgba(45,50,51,1)]
        border-2
        ${selected ? "border-[#fdb056]" : "border-[rgba(72,77,78,1)]"}
        rounded-2xl
        xl:rounded-4xl
        ${className}
      `}
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden xl:block pt-[28px] px-5 pb-[40px] hover:scale-[1.02] ">
        {discountVisible && (
          <div className="absolute top-0 left-[50px] w-16 h-10 bg-[rgba(253,86,86,1)] text-white rounded flex items-center justify-center">
            <span className="text-[22px] font-medium">-{discount}%</span>
          </div>
        )}

        <div className="absolute top-2 right-2 px-3 py-1 text-[#fdb056] text-[18px] font-semibold">
          ХИТ!
        </div>

        <div className="text-[26px]  ml-31">{tariff.period}</div>

        <div className="flex justify-and gap-12 pl-[100px]">
          <div className="flex flex-col items-end-safe">
            <div className="text-[50px]  text-[#fdb056] whitespace-nowrap">
              {tariff.price} ₽
            </div>
            {discountVisible && (
              <div className="text-[24px] leading-[20%] text-[#919191] line-through whitespace-nowrap">
                {tariff.full_price} ₽
              </div>
            )}
          </div>

          <p className="text-[14px] text-white">{tariff.text}</p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="xl:hidden pt-[22px] pl-5 xs:pl-7 xl:pl-5 pb-6 relative">
        {discountVisible && (
          <div className="absolute top-0 right-[50px] xs:right-[60px] w-[44px] xs:h-[23px] bg-[rgba(253,86,86,1)] text-white flex items-center justify-center rounded-md">
            <span className="text-[13px]">-{discount}%</span>
          </div>
        )}

        <div className="absolute top-[-5px] right-8 translate-x-[50%] translate-y-[50%] text-[#fdb056] text-[10px] xs:text-[13px] font-semibold">
          ХИТ!
        </div>

        <div className="text-[18px] leading-[60%] xs:leading-[120%] mb-2 ">{tariff.period}</div>

        <div className="flex justify-between gap-[34px] xs:gap-14 pr-2">
          <div className="flex flex-col items-end">
            <div className="text-[30px] xs:text-[34px] text-[#fdb056] whitespace-nowrap">
              {tariff.price} ₽
            </div>
            {discountVisible && (
              <div className="text-[14px] leading-[20%] text-[#919191] line-through">
                {tariff.full_price} ₽
              </div>
            )}
          </div>

          <p className="text-[14px] leading-4 text-white max-w-[170px]">{mobileText}</p>
        </div>
      </div>
    </div>
  );
}