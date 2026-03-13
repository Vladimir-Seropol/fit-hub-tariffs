"use client";

import { useState } from "react";
import { TariffCardProps } from "@/types/tariff";
import { calculateDiscount } from "@/utils/calculateDiscount";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function TariffCardBest({
  tariff,
  onSelect,
  showDiscount,
}: TariffCardProps) {
  const discount = calculateDiscount(tariff.full_price, tariff.price);
  const [discountVisible] = useState(showDiscount);

  const isSmallScreen = useMediaQuery("(max-width: 1280px)");

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const truncatedText = isSmallScreen
    ? capitalize(tariff.text.split(" ").slice(4, 8).join(" "))
    : tariff.text;

  return (
    <div
      onClick={() => onSelect(tariff.uuid)}
      className="
      relative
      h-full
      w-full
      cursor-pointer
      rounded-4xl
      border
      pt-2
      xs:pt-4
      xl:pt-[28px]
      px-5
      xs:px-8
      xl:px-5
      pb-[5px]
      xs:pb-4
      xl:pb-[24px]
      transition-all
      duration-200
      bg-[rgba(45,50,51,1)]
      hover:scale-[1.02]
      border-[#fdb056]
      md:col-span-3
      md:p-6
      "
    >
      {discountVisible && (
        <div className="absolute top-0 xl:left-[50px] right-[60px] w-[42px] h-[23px] xs:w-[51px] xs:h-[27px] xl:w-16 xl:h-10 bg-[rgba(253,86,86,1)] text-white px-2 py-1 rounded flex items-center justify-center">
          <span className="font-gilroy font-medium text-[13px] xs:text-[16px] xl:text-[22px] leading-[130%]">
            -{discount}%
          </span>
        </div>
      )}

      <div className="font-medium xl:text-[26px] leading-[120%] mt-2 ml-0 xl:ml-31 mb-[-1]">
        {tariff.period}
      </div>

      <div className="flex justify-between gap-10 mt-3 xl:pl-24">
        <div className="absolute top-0 xl:top-2 right-1 xl:right-2 px-3 py-1 rounded-full text-[rgba(253,176,86,1)]">
          <span className="text-[13px] xs:text-[14px] xl:text-[20px] leading-[130%] tracking-[3%]">
            ХИТ!
          </span>
        </div>

        <div className="flex flex-col">
          <div className="text-right font-semibold text-[34px] xl:text-[50px] leading-[120%] text-[rgba(253,176,86,1)] whitespace-nowrap">
            {tariff.price} ₽
          </div>

          {discountVisible && (
            <div className="flex justify-end font-normal text-[16px] xl:text-[24px] leading-[120%] text-[rgba(145,145,145,1)] line-through whitespace-nowrap">
              {tariff.full_price} ₽
            </div>
          )}
        </div>

        <p className="text-[16px] leading-[130%] text-[rgba(255,255,255,1)] font-normal">
          {truncatedText}
        </p>
      </div>
    </div>
  );
}