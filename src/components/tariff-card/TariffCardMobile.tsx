"use client";

import { useState } from "react";
import { TariffCardProps } from "@/types/tariff";
import { calculateDiscount } from "@/utils/calculateDiscount";

export default function TariffCardMobile({
  tariff,
  selected,
  onSelect,
  showDiscount,
}: TariffCardProps) {
  const discount = calculateDiscount(tariff.full_price, tariff.price);
  const isBest = tariff.is_best;

  const [discountVisible] = useState(() => showDiscount);

  return (
    <div
      onClick={() => onSelect(tariff.uuid)}
      className={`
        relative
        w-full
        cursor-pointer
        rounded-[28px]
        border-2
        pl-5
        xs:pl-8
        pt-5
        pb-4
        xs:pb-5
        bg-[rgba(45,50,51,1)]
        transition
        duration-200
        ${selected ? " border-[#fdb056]" : "border-[rgba(72, 77, 78, 1)]"}
        
      `}
    >
      {discountVisible && (
        <div className="absolute top-0 right-8 w-[44px] xs:w-[51px] h-[23px] xs:h-[27px] bg-[rgba(253,86,86,1)] text-white flex items-center justify-center rounded-md">
          <span className="text-[13px] xs:text-[16px] font-medium leading-[130%]">
            -{discount}%
          </span>
        </div>
      )}

      {isBest && (
        <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-[rgba(253,176,86,1)] text-[13px] xs:text-[14px] font-semibold">
          ХИТ!
        </div>
      )}

      <div className="text-[16px] xs:text-[18px] font-medium leading-[120%] mb-3">
        {tariff.period}
      </div>

      <div className="flex justify-between items-start gap-6 pr-2">
        <div className="flex flex-col items-end">
          <div
            className={`font-semibold leading-[120%] text-[30px] xs:text-[34px] whitespace-nowrap ${
              isBest ? "text-[#fdb056]" : ""
            }`}
          >
            {tariff.price} ₽
          </div>

          {discountVisible && (
            <div className="text-[14px] xs:text-[16px] leading-[80%] text-[rgba(145,145,145,1)] line-through">
              {tariff.full_price} ₽
            </div>
          )}
        </div>

        <p className="text-[14px] leading-[130%] text-white max-w-[170px]">
          {tariff.text}
        </p>
      </div>
    </div>
  );
}