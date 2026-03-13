"use client";

import { formatTime } from "@/utils/formatTime";
import SparkIcon from "./SparkIcon";

type Props = {
  seconds: number;
};

export default function Timer({ seconds }: Props) {
  let colorClass = "text-white";

  if (seconds > 60) {
    colorClass = "text-[rgba(255,187,0,1)]";
  } else if (seconds > 0) {
    colorClass = "text-[rgba(255,78,78,1)] animate-pulse";
  }

  return (
    <div
      className={`
        font-raleway
        font-bold
        text-[28px] xs:text-[32px] xl:text-[40px]
        leading-[110%]
        uppercase
        ${colorClass}
      `}
    >
      <div className="flex items-center justify-center gap-2">
        <SparkIcon />
        {formatTime(seconds)}
        <SparkIcon />
      </div>
    </div>
  );
}
