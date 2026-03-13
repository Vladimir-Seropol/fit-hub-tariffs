"use client";

import { useState } from "react";
import { TariffCardProps } from "@/types/tariff";
import { calculateDiscount } from "@/utils/calculateDiscount";

export default function TariffCardRegular({
  tariff,
  selected,
  onSelect,
  showDiscount,
}: TariffCardProps) {
  const discount = calculateDiscount(tariff.full_price, tariff.price);
  const [discountVisible] = useState(showDiscount);

  return (
    <div
      onClick={() => onSelect(tariff.uuid)}
      className={`
      relative
      h-full
      w-full
      cursor-pointer
      rounded-4xl
      border
      pt-[70px]
      px-5
      pb-6
      transition-all
      duration-200
      bg-[rgba(45,50,51,1)]
      hover:scale-[1.02]
      w-[240px]
      ${selected ? "border-[#fdb056] shadow-lg" : "border-neutral-700"}
      `}
    >
      {discountVisible && (
        <div className="absolute top-0 left-[55px] w-16 h-10 bg-[rgba(253,86,86,1)] text-white px-2 py-1 rounded flex items-center justify-center">
          <span className="font-gilroy font-medium text-[16px] text-[22px] leading-[130%]">
            -{discount}%
          </span>
        </div>
      )}

      <div className="font-medium text-[26px] leading-[120%] mt-0 mb-7 ml-10">
        {tariff.period}
      </div>

      <div className="flex flex-col items-end">
        <div className="font-semibold text-[50px] leading-[120%]">
          {tariff.price} ₽
        </div>

        {discountVisible && (
          <div className="font-normal text-[24px] leading-[120%] text-[rgba(145,145,145,1)] line-through">
            {tariff.full_price} ₽
          </div>
        )}
      </div>

      <p className="font-normal text-[16px] leading-[130%] text-[rgba(255,255,255,1)] mt-10 mb-2">
        {tariff.text}
      </p>
    </div>
  );
}