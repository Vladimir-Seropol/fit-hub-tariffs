"use client";

import Timer from "../timer/Timer";

type Props = {
  seconds: number;
};

export default function Header({ seconds }: Props) {
  return (
    <header className="sticky top-0 z-10 bg-[rgba(29,91,67,1)] xl:rounded-t-[30px]">
      <div className="flex flex-col items-center py-2 pb-3 gap-2">
        <p
          className="
            font-semibold
            text-[14px] xs:text-[18px] xl:text-[24px]
            leading-[130%]
            text-center
          "
        >
          Успейте открыть пробную неделю
        </p>

        <Timer seconds={seconds} />
      </div>
    </header>
  );
}
