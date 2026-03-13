"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function PurchaseBlock() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleBuy = () => {
    if (!checked) {
      setError(true);
      return;
    }

    setError(false);

    toast.success("Покупка выполнена", {
      className: `
    text-white
    rounded-2xl
    px-5
    py-3
    shadow-xl
    border
    border-neutral-700
    backdrop-blur
  `,
    });
  };

  return (
    <div className="mt-3 xs:mt-5 xl:mt-7 flex flex-col items-start gap-5 xl:gap-4">
      <label className="flex items-center gap-2 text-sm cursor-pointer  max-w-[600px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            setError(false);
          }}
          className="absolute  cursor-pointer w-8 h-8 opacity-0"
        />

        <div
          onClick={() => {
            setChecked(!checked);
            setError(false);
          }}
          className={`
  w-15
  xs:w-12
  xl:w-10 
  h-8
  border-2
  border-[rgba(96,101,102,1)]
  rounded
  flex
  items-center
  justify-center
  cursor-pointer
  transition
  ${error ? "ring-1 ring-red-500 border-none" : ""}
`}
        >
          {checked && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17L4 12"
                stroke="rgba(253,176,86,1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <span
          className={
            error
              ? "text-red-500 font-normal  text-base text-[12px] xl:text-[16px]   leading-[110%]"
              : "text-[rgba(205,205,205,1)] font-normal  text-base text-[12px] xl:text-[16px]   leading-[110%]"
          }
        >
          Я согласен с{" "}
          <span className="underline">офертой рекуррентных платежей</span> и{" "}
          <span className="underline">Политикой конфиденциальности</span>
        </span>
      </label>

      <button
        onClick={handleBuy}
        className="
  px-28
    xs:px-34
    py-4
    xs:py-5
    rounded-xl
    bg-[rgba(253,176,86,1)]
    text-[rgba(25,30,31,1)]
    font-bold
    text-[18px]
    xl:text-[20px]
    leading-[130%]
    tracking-[0px]
    align-middle
    animate-pulse
    hover:bg-orange-600
    transition
    
  "
      >
        Купить
      </button>
      <p className=" font-normal text-[10px] xl:text-[14px] leading-[120%]  align-bottom text-[rgba(155,155,155,1)]">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
        денежных средств для получения пожизненного доступа к приложению.
        Пользователь соглашается, что данные кредитной/дебетовой карты будут
        сохранены для осуществления покупок дополнительных услуг сервиса в
        случае желания пользователя.
      </p>

      <Toaster position="top-center" />
    </div>
  );
}
